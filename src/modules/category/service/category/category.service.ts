import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../repository/category.repository';

@Injectable()
export class CategoryService {

    constructor(private readonly repo: CategoryRepository){}

    create(category){
        return this.repo.create(category);
    }

    findAll(){
        return this.repo.findAll();
    }
}
