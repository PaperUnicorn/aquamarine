import { PrimaryGeneratedColumn , Column , JoinColumn , OneToMany , Entity, ManyToOne } from 'typeorm';
import { Board } from './Board';

@Entity()
export class List{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    
    @Column()
    description : string;

    @ManyToOne( type => Board , board => board.lists)
    board : number;

}