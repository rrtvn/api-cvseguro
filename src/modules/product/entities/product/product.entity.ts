import { User } from "src/modules/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id_product: string;

    @Column()
    name: string;
    
    @Column({nullable: true})
    description: string;
    
    @Column('numeric', { precision: 10, scale: 2 })
    price: number;
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    data_public: Date;
    
    @Column({default: true})
    disponible: boolean;

    @ManyToOne(() => User, { onDelete: 'CASCADE' } )
    @JoinColumn({ name: 'id_user'})
    user: User;

    // id_category: string;

    // id_state: string;


}
