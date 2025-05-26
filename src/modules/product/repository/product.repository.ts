import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "../entities/product/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductRepository{

    constructor(
        @InjectRepository(Product)
        private readonly repo: Repository<Product>,
    ){}

    create(data: Partial<Product>){
        const product = this.repo.create(data);
        return this.repo.save(product);
    }

    findAll(){
        return this.repo.find();
    }
}