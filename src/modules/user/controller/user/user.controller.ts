import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import { CreateUserDto } from '../../dto/create-user.dto';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    // @Post()
    // create(@Body() dto: CreateUserDto){
    //     return this.userService.create(dto);
    // }

    @Get()
    findAll(){
        return this.userService.findAll();
    }


}
