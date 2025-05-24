import { Injectable } from "@nestjs/common";
import { User } from "../../entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserRepository{
    constructor(
        @InjectRepository(User)
        private readonly repo: Repository<User>,
    ){}

    async findAll(): Promise<User[]>{
        console.log(await this.repo.find());
        return await this.repo.find();
    }
}