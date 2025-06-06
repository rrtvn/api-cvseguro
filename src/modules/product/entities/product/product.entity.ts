import { User } from "src/modules/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id_product: string;

    @Column({ nullable: true })
    name: string;
    
    @Column({ nullable: true })
    description: string;
    
    @Column({ nullable: true })
    price: number;
    
    @Column({ nullable: true })
    date_public: Date;
    
    @Column({ nullable: true })
    disponible: boolean;

    @ManyToOne(() => User, {eager: true})
    @JoinColumn({ name: 'id_user'})
    user: User;

    // id_category: string;

    // id_state: string;


}
