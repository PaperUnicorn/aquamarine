import { PrimaryGeneratedColumn , Column , JoinColumn , OneToMany , Entity, ManyToOne } from 'typeorm';
import { Board } from './Board';
import { Task } from './Task';

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

    @OneToMany( type => Task , task => task.list )
    tasks : Task[]

}