import { PrimaryGeneratedColumn , Column , JoinColumn , OneToOne , OneToMany , Entity, ManyToMany, JoinTable } from 'typeorm';
import User from './User';
import { type } from 'os';
import { UserTeamMapping } from './UserTeamMapping';

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
}