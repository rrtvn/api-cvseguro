import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { ProductService } from '../../service/product/product.service';

@Controller('product')
export class ProductController {

    constructor (private readonly productService: ProductService){}

    @Post()
    create(@Body() product: CreateProductDto){
        return this.productService.create(product);
    }

    @Get()
    findAll(){
        return this.productService.findAll();
    }

}
