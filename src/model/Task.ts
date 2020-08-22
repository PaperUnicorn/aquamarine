import { PrimaryGeneratedColumn , Column , JoinColumn , OneToMany , Entity, ManyToOne } from 'typeorm';
import { List } from './List';

@Entity()
export class Task{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    
    @Column()
    description : string;

    @ManyToOne( type => List , list => list.tasks)
    list : number;

}