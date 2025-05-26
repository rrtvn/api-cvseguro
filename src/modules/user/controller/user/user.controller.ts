import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { response } from 'express';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() user: CreateUserDto){
        return this.userService.create(user);
    }

    @Get()
    findAll(){
        return this.userService.findAll();
    }


}
