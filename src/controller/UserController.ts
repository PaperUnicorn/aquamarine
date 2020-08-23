import EncryptionDecryption from '../utils/bcrypt/encryptionDecryption';
import { getConnection, Long } from 'typeorm';

import User from '../model/User';

export default class UserController {
    constructor() { }

    async getUserById(id: string) {
        const user = await getConnection().getRepository(User).findOne({ id: id })
            .then(result => { return result })
            .catch(error => { return error; });
        return user;
    }

    async getUserByEmail(email: string) {

        const user = await getConnection().getRepository(User)
            .createQueryBuilder("user").where("user.email = :email", { email: email }).getOne()
            .then(result => { return result; })
            .catch(error => { return error; });
        return user;
    }

    async getUserByUserName(name: string) {

        const user = await getConnection().getRepository(User)
            .createQueryBuilder("user").where("user.userName = :userName", { userName: name }).getOne()
            .then(result => { return result })
            .catch(e => { return e });
        return user;
    }

    async getAllUsers() {
        const users = getConnection().getRepository(User).find();
        return users;
    }

    async saveUser(data: User) {
        const util = new EncryptionDecryption();
        data = {
            ...data,
            "is_active": true,
            "password": await util.encryptPassword(data.password),
            "createdOn": new Date(),
            "lastUpdatedOn": new Date()
        }
        return getConnection().getRepository(User).save(data);
    }

    async deactivateUserById(id: string) {
        return await getConnection().getRepository(User).createQueryBuilder("user")
            .update(User).set({ is_active: false }).where("id = :id", { id: id }).execute()
            .then(result => { console.log(result); return true })
            .catch(error => { console.log(error); return false; });
    }

    async activateUserById(id: string) {
        return await getConnection().getRepository(User).createQueryBuilder("user")
            .update(User).set({ is_active: true }).where("id = :id", { id: id }).execute()
            .then(result => { console.log(result); return true })
            .catch(error => { console.log(error); return false; });
    }

    async validateUser(email: string, password: string) {
        const util = new EncryptionDecryption();
        const user = await getConnection().getRepository(User)
            .createQueryBuilder("user").where("user.email = :email", { email: email }).getOne();

        return util.validate(password, user.password);
    }

}


