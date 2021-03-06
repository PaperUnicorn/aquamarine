import { PrimaryGeneratedColumn , Column , JoinColumn , OneToMany , Entity, ManyToOne } from 'typeorm';
import { List } from './List';
import { Ticket } from './Ticket';

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

    @OneToMany( type => Ticket , ticket => ticket.task )
    tickets : Ticket[]

}