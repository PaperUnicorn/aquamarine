var EncryptionDecryption = require('../Utils/bcrypt/encryptionDecryption');
var UserDao = require('../dao/usersDao');

class UserService {
    constructor() { };

    async saveUser(data) {
        var encryptionDecryption = new EncryptionDecryption();
        var password = await encryptionDecryption.encryptPassword(data.password);

        var userDao = new UserDao();
        data.password = password;

        await userDao.saveUser(data.firstName, data.lastName, data.userName, data.emailId, data.password, data.isActive);
    };

    async validateUser(data) {
        var userDao = new UserDao();
        var userData = await userDao.findUserByEmail(data.emailId);


        var encryptionDecryption = new EncryptionDecryption();

        return encryptionDecryption.validate(data.password, userData.password);

    };

    async getAll(){
        var userDao = new UserDao();
        var result = await userDao.getAll();
        console.log(result);
        return result;
    };

}

module.exports = UserService;