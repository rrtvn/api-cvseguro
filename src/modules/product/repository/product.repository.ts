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

    async findById(id_product: string): Promise<Product>{
        const product = await this.repo.findOne({where: {id_product}});
        if (!product) throw new Error('Product not found');
        return product;
    }

    async delete(id_product: string): Promise<void>{
        await this.repo.delete(id_product);
    }

    async update(id_product: string, data: Partial<Product>): Promise<Product>{
        await this.repo.update(id_product, data);
        return this.findById(id_product);
    }
}