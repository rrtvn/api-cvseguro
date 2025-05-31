import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "../entities/product/product.entity";
import { Repository } from "typeorm";
import { CreateProductDto } from "../dto/product/create-product.dto";
import { User } from "src/modules/user/entities/user.entity";
import { UserRepository } from "src/modules/user/repository/user/user.repository";

@Injectable()
export class ProductRepository{

    constructor(
        @InjectRepository(Product)
        private readonly repo: Repository<Product>,
        private readonly userRepo: UserRepository,
    ){}

    async create(createProductDto: CreateProductDto): Promise<Product> {
       
        const user = await this.userRepo.findOne(createProductDto.id_user );

        if(!user) {
            throw new Error('User not found');
        }
        
        const product = this.repo.create({
            ...createProductDto,
            user,
        });
        return await this.repo.save(product);
    }

    async findAll(): Promise<Product[]>{ 
        return await this.repo.find();
    }
}