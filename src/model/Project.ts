import { PrimaryGeneratedColumn , Column , JoinColumn , OneToOne , OneToMany , Entity } from 'typeorm';
import User from './User';
import { type } from 'os';
import { Board } from './Board';
import { Team } from './Team';

@Entity()
export class Project{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({unique : true})
    name : string;

    @Column()
    description : string;
    
    @Column({ nullable: true })
    email: string; // primary key of User table to create a foreign key relation

    @Column({ default:true })
    isActive : boolean;

    @OneToOne(type => User)
    @JoinColumn()
    user : User

    @OneToMany( type => Board , board => board.project )
    boards : Board[]

    @OneToMany( type => Team , team => team.project )
    teams : Team[]

}