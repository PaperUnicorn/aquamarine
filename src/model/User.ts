import { Column, Entity, Long, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Team } from './Team';
import { UserTeamMapping } from './UserTeamMapping';

@Entity()
class User{
     @PrimaryGeneratedColumn()
     id: Long;
     @Column()
     firstName : string;
     @Column()
     lastName : string;
     @Column({unique:true})
     email : string;
     @Column({unique:true})
     userName : string;
     @Column()
     password : string;
     @Column()
     is_active : boolean;
     @Column()
     createdOn : Date;
     @Column()
     lastUpdatedOn : Date;

     @OneToMany(type => UserTeamMapping , userTeamMapping => userTeamMapping.user)
     teams! : UserTeamMapping[];
}
export default User