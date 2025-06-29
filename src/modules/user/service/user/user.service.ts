import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UserRepository } from '../../repository/user/user.repository';


@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository
    ){}

    create(user){
        return this.userRepository.create(user);
    }

    findAll(){
        return this.userRepository.findAll();
    }

    findByEmail(email: string){
        return this.userRepository.findByEmail(email);
    }
    findByEmailWithPassword(email: string){
        return this.userRepository.findByEmail(email);
    }

    async delete(id: string): Promise<{message: string}>{
        const user = this.userRepository.findById(id);
        if (!user) throw new NotFoundException('User not found');
        await this.userRepository.delete(id);
        // TODO: SI QUEREMOS ENVIAR UN MENSAJE DE USUARIO ELIMINADO 
        // DEBERIAMOS ELIMINAR EL VOID 

        return{
            message: 'Usuario eliminado.'
        }
        
    }

    async update(id: string, data: Partial<User>): Promise<User>{
        const user = await this.userRepository.findById(id);
        if (!user) throw new NotFoundException('User not found');
        return this.userRepository.update(id, data);
    }
}
