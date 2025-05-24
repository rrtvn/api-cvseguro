import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UserRepository } from '../../repository/user/user.repository';


@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository
    ){}

    // async create(createUserDto: CreateUserDto): Promise<User>{
    //     const user = this.userRepo.create(createUserDto);
    //     return this.userRepo.save(user);
    // }

    findAll(){
        return this.userRepository.findAll();
    }
}
