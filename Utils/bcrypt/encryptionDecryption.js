var bcrypt = require('bcrypt');
var saltRound = 5;

class EncryptionDecryption {

    constructor() { };

    async encryptPassword(password) {
        var hashedPassword;
        var hashedPassword = await bcrypt.hash(password, saltRound);
        return hashedPassword;
        
    };

    async validate(userPassord, hashedPassword) {

       var result = await bcrypt.compare(userPassord, hashedPassword);

       return result;
    };

}

module.exports = EncryptionDecryption;