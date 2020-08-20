import bcrypt from 'bcrypt';
const saltRound = 5;

class EncryptionDecryption {

    constructor() { };

    async encryptPassword(password : string) {
        return  await bcrypt.hash(password, saltRound);
    };

    async validate(userPassord : string , hashedPassword : string) {
       return await bcrypt.compare(userPassord, hashedPassword);
    };

}
export default EncryptionDecryption;