import { IsString } from "class-validator";


export class CreateProductDto {

    //VALIDADORES
    @IsString()
    name: string;

    description: string;

    price: number;

    disponible: boolean;

    id_user: string;


}
