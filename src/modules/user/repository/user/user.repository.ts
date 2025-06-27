import { BadRequestException, Injectable } from "@nestjs/common";
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


     findByEmail(email: string){
        
        
        return this.repo.findOne({where: {email}});;
    } 

    async findById(id: string): Promise<User>{
        const user = await this.repo.findOne({where: {id}});
        if (!user) throw new Error('User not found');
        return user;
    }

    async delete(id: string): Promise<void>{
        await this.repo.delete(id);
    }

    async update(id: string, data: Partial<User>): Promise<User>{
        await this.repo.update(id, data);
        return this.findById(id);
    }
}