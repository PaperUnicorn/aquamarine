var conn = require('../configuration/postgres');

class UserDao {

  constructor() { };

  async findUserByEmail(emailId) {
    var userData;
    await conn.one('select * from aqua.users_data where emailId=$1', [emailId])
      .then(function (data) {
        userData = data;
      })
      .catch(function (error) {
        console.log('ERROR:', error)
      })
    return userData;
  };

  async saveUser(firstName, lastName, userName, emailId, password, isActive) {
    await conn.query('insert into aqua.users_data (firstName, lastName, userName, emailId, password, isActive, created_on, last_updated_on) values ($1,$2,$3,$4,$5,$6,current_date,current_date)', [firstName, lastName, userName, emailId, password, isActive])
  };

}

module.exports = UserDao;

