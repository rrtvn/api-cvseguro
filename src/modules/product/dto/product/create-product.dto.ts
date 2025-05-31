import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateProductDto {

    //VALIDADORES
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNumber()
    price: number;

    @IsNotEmpty()
    data_public: Date;

    @IsNotEmpty()
    disponible: boolean;

    @IsNotEmpty()
    id_user: string;


}
