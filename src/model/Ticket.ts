import { PrimaryGeneratedColumn , Column , JoinColumn , OneToMany , Entity, ManyToOne } from 'typeorm';
import { Task } from './Task';

@Entity()
export class Ticket{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    
    @Column()
    description : string;

    @ManyToOne( type => Task , task => task.tickets)
    task : number;

}