import { Module } from '@nestjs/common';
import { CategoryController } from './controller/category/category.controller';
import { CategoryService } from './service/category/category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category/category.entity';
import { CategoryRepository } from './repository/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository]
})
export class CategoryModule {}
