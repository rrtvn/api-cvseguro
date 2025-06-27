import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { UserService } from "../user/service/user/user.service";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";

import * as bcryptjs from "bcryptjs";
import { RegisterDto } from "./dto/register.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async register(registerDto: RegisterDto) {
    const user = await this.userService.findByEmail(registerDto.email);

    if (user) {
      // password: await bcryptjs.hashSync(password, 10),
      throw new BadRequestException("El usuario ya exixste");
    }

    await this.userService.create({

      name: registerDto.name,
      email: registerDto.email,
      password: await bcryptjs.hashSync(registerDto.password, 10),
    });

    return { registerDto };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.userService.findByEmailWithPassword(email);
    if (!user) {
      throw new UnauthorizedException("Invalid email");
    }

    // const isPasswordValid = await bcryptjs.compare(password, user.password);

    // if (!isPasswordValid) {
    //     throw new UnauthorizedException('Invalid password');
    // }

    const payload = { email: user.email, sub: user.id };
    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      email,
      message: "Inicio de session exitoso.",
    };
  }
}
