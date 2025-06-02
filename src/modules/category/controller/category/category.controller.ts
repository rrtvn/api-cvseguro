import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from '../../service/category/category.service';
import { CreateCategoryDto } from '../../dto/category/category.dto';

@Controller('categories')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService){}

    @Post()
    create(@Body() category: CreateCategoryDto){
        return this.categoryService.create(category);
    }

    @Get()
    findAll(){
        return this.categoryService.findAll();
    }
}
