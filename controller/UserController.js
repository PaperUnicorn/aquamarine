const { getOne,getAll,getByEmail,getByName , save } = require('../model/User');
var EncryptionDecryption = require('../Utils/bcrypt/encryptionDecryption');
async function getUserById(id){
    const result = await getOne(id);
    return result;
}
async function getAllUsers(){
    const result = await getAll();
    return result;
}

async function getUserByEmail(id){
    const result = await getByEmail(id);
    return result;
}

async function getUserByName(name){
    const result = await getByName(name);
    return result;
}

async function saveUser(data){
    var user = {};
    var encryptionDecryption = new EncryptionDecryption();
    var password = await encryptionDecryption.encryptPassword(data.password);
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.userName = data.userName;
    user.emailId = data.email;
    user.password = password
    user.isActive = true;
    const result = await save(user);
    return result;
}

module.exports = {
     getUserById , getAllUsers, getUserByEmail ,getUserByName ,
     saveUser
    };


