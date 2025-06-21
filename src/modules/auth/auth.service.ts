import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/service/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ){}

    async login({email, password}: LoginDto){
        const user = await this.userService.findByEmailWithPassword(email);
        if (!user) {
            throw new UnauthorizedException('Invalid email');
        }

        // const isPasswordValid = await bcryptjs.compare(password, user.password);

        // if (!isPasswordValid) {
        //     throw new UnauthorizedException('Invalid password');
        // }

        const payload = {email: user.email, sub: user.id};
        const token = await this.jwtService.signAsync(payload);

        return {
            token,
            email,
            message: 'Inicio de session exitoso.'
        };
    }

}
