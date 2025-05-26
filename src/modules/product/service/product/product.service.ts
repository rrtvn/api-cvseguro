import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../repository/product.repository';

@Injectable()
export class ProductService {
    constructor(private readonly repo: ProductRepository) {}

    create(product){
        return this.repo.create(product);
    }

    findAll(){
        return this.repo.findAll();
    }
}
