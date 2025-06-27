import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


export class RegisterDto {

    @IsNotEmpty()
        name: string;
    
        @IsEmail()
        email: string;
    
        @MinLength(12)
        password: string;
}
