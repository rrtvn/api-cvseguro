import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product/product.entity';
import { ProductController } from './controller/product/product.controller';
import { ProductService } from './service/product/product.service';
import { ProductRepository } from './repository/product.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers:[ProductController],
    providers: [ProductService, ProductRepository],
    exports: [ProductService],
})
export class ProductModule {}
