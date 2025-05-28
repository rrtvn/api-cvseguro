import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ProductController } from './modules/product/controller/product/product.controller';
import { ProductService } from './modules/product/service/product/product.service';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    UserModule,
    CategoryModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
