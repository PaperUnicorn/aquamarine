import { PrimaryGeneratedColumn , Column , JoinColumn , OneToMany , Entity, ManyToOne } from 'typeorm';
import { Project } from './Project';

@Entity()
export class Board{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    
    @Column()
    description : string;

    @ManyToOne( type => Project , project => project.boards)
    project : number;

}