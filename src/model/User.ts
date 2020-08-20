import { PrimaryColumn,Column, Entity } from 'typeorm';

@Entity()
class User{
     @Column()
     firstName : string;
     @Column()
     lastName : string;
     @PrimaryColumn()
     email : string;
     @Column()
     userName : string;
     @Column()
     password : string;
     @Column()
     isActive : boolean;
     @Column()
     createdOn : Date;
     @Column()
     lastUpdatedOn : Date;
}
export default User