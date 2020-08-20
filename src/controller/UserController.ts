
import conn  from './../configuration/postgres';
import { getConnection } from 'typeorm';
import EncryptionDecryption from '../Utils/bcrypt/encryptionDecryption';
import User from '../model/User';


export default class UserController {
    constructor(){}
    async  getUserById(id : string){
    
        const row = await conn.oneOrNone('select * from user_data where email = $1',[id])
                            .then(result => { console.log(result); return result})
                            .catch(error => {console.log(error); return error;});
        return row;
    }
    async  getAllUsers(){
        const rowcount = getConnection().getRepository(User).find();
        return rowcount;
    }

    async  getUserByEmail(id : string){
        const row = await conn.oneOrNone('select * from user_data where email = $1',[id])
                            .then(result => { console.log(result); return result})
                            .catch(error => {console.log(error); return error;});
        return row;
    }

    async  getUserByName(name : string){
        const rows = await conn.one('select * from user_data where first_name = $1', name)
                .then(e => { return e})
                .catch(e => {console.log(e)});
        return rows;
    }
    async saveUser (data : User){
        const util =new EncryptionDecryption();
        data = {
            ...data,
            "isActive" : true,
            "password" :await util.encryptPassword(data.password),
            "createdOn" :new Date(),
            "lastUpdatedOn" : new Date()   
        }
        return getConnection().getRepository(User).save(data);
    }

    async validateUser( data : any ){
        const util =new EncryptionDecryption();
        const user = await getConnection().getRepository(User).findOne(data.email);
        return util.validate(data.password , user.password);
    }

}


