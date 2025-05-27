import { Injectable } from "@nestjs/common";
import { User } from "../../entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../../dto/create-user.dto";
import { response } from "express";

@Injectable()
export class UserRepository{
    constructor(
        @InjectRepository(User)
        private readonly repo: Repository<User>,
    ){}

    async create(createUserDto: CreateUserDto): Promise<User>{
        const user = this.repo.create(createUserDto);
        return this.repo.save(user);
    }

    async findAll(): Promise<User[]>{
        // console.log(await this.repo.find());             
        return await this.repo.find();
    }

    async findOne(id: string): Promise<User> {
        const user = await this.repo.findOne({where: {id}});
        if(!user){
            throw new Error('User not found');
        }
        return user;
    }
}