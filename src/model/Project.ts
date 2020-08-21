import { PrimaryGeneratedColumn , Column , JoinColumn , OneToOne , OneToMany , Entity } from 'typeorm';
import User from './User';
import { type } from 'os';
import { Board } from './Board';

@Entity()
export class Project{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    description : string;
    
    @Column({ nullable: true })
    email: string; // primary key of User table to create a foreign key relation

    @OneToOne(type => User)
    @JoinColumn({ name : 'email' })
    user : User

    @OneToMany( type => Board , board => board.project )
    boards : Board[]
}