const { getOne,getAll,getByEmail,getByName , save , update , deleteuser } = require('../model/User');
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

async function updateUser(data){
    var user = {};
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.userName = data.userName;
    user.emailId = data.email;
    const result = await update(user);
    return result;
}

async function deleteUser(data){
    const result = await deleteuser(data);
    return result;
}
async function validateUser(user){
    var result = await getByEmail(user.email);
    var encryptionDecryption = new EncryptionDecryption();  
    return encryptionDecryption.validate(user.password,result.password);
}

module.exports = {
     getUserById , getAllUsers, getUserByEmail ,getUserByName ,
     saveUser , validateUser , updateUser , deleteUser
    };


