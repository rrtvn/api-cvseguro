import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../entities/product/product.entity';

@Controller('products')
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

    @Delete(':id')
    delete(@Param('id') id: string): Promise<void>{
        return this.productService.delete(id);
    }

    @Patch(':id_product')
    async updateProduct(
        @Param('id_product') id_product: string,
        @Body() data: Partial<Product>,
    ): Promise<Product>{
        return this.productService.update(id_product, data);
    }
}
