import { User } from "src/modules/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

Entity('products')
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id_product: string;

    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @Column()
    price: number;
    
    @Column()
    date_public: Date;
    
    @Column()
    disponible: boolean;

    @ManyToOne(() => User, {eager: true})
    @JoinColumn({ name: 'id_user'})
    user: User;

    // id_category: string;

    // id_state: string;


}
