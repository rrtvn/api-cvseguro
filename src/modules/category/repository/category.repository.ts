import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "../entities/category/category.entity";
import { Repository } from "typeorm";


export class CategoryRepository{
   
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepo: Repository<Category>,
    ){}

    create(data: Partial<Category>){
        const category = this.categoryRepo.create(data);
        return this.categoryRepo.save(category);
    }

    findAll(){
        return this.categoryRepo.find();
    }
}