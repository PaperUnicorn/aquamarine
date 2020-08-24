import { PrimaryGeneratedColumn , Column , JoinColumn , OneToOne , OneToMany , Entity, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import User from './User';
import { type } from 'os';
import { UserTeamMapping } from './UserTeamMapping';
import { Project } from './Project';

@Entity()
export class Team{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({unique:true})
    name : string;

    @Column()
    description : string;

    @OneToMany(type => UserTeamMapping , userTeamMapping => userTeamMapping.team)
    users! : UserTeamMapping[]; // @todo: why is ! used

    @ManyToOne( type => Project , project => project.teams)
    project : number;
}