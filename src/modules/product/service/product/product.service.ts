import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../repository/product.repository';

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    create(product){
        return this.productRepository.create(product);
    }

    findAll(){
        return this.productRepository.findAll();
    }
}
