import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../repository/product.repository';
import { Product } from '../../entities/product/product.entity';

@Injectable()
export class ProductService {
    constructor(private readonly repo: ProductRepository) {}

    create(product){
        return this.repo.create(product);
    }

    findAll(){
        return this.repo.findAll();
    }

    async delete(id_product: string): Promise<void>{
        const product = this.repo.findById(id_product);
        if (!product) throw new NotFoundException('Product not found');
        await this.repo.delete(id_product);
    }

    async update(id_product: string, data: Partial<Product>): Promise<Product>{
        const product = await this.repo.findById(id_product);
        if (!product) throw new NotFoundException('Product not found');
        return this.repo.update(id_product, data);
    }
}
