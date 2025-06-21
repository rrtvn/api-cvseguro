import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';

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

    @Delete(':id')
    delete(@Param('id') id: string): Promise<{message: string}>{
        return this.userService.delete(id);
    }

    @Patch(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() data: Partial<User>,

    ): Promise<User>{
        return this.userService.update(id, data);
    }


}
