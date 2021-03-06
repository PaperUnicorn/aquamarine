import { PrimaryGeneratedColumn , Column , JoinColumn , OneToMany , Entity, ManyToOne } from 'typeorm';
import { Project } from './Project';
import { List } from './List';

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

    @OneToMany( type => List , list => list.board )
    lists : List[]

}