import { Column, Entity, Long, PrimaryGeneratedColumn } from 'typeorm';

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
}
export default User