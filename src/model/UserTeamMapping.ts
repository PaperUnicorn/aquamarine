import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import { Team } from "./Team";

@Entity()
export class UserTeamMapping {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public userId!: number;

    @Column()
    public teamId!: number;

    @Column()
    public order!: number;

    @Column()
    public role!: string;

    @ManyToOne(type => User, user => user.teams)
    public user!: User;

    @ManyToOne(type => Team, team => team.users)
    public team!: Team;
}