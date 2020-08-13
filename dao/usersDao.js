var conn = require('../configuration/postgres');

class UserDao {

  constructor() { };

  async findUserByEmail(emailId) {
    var userData;
    await conn.one('select * from user_data where email=$1', [emailId])
      .then(function (data) {
        userData = data;
      })
      .catch(function (error) {
        console.log('ERROR:', error)
      })
    return userData;
  };

  async saveUser(firstName, lastName, userName, emailId, password, isActive) {
    await conn.query('insert into user_data (firstName, lastName, userName, email, password, isActive, created_on, last_updated_on) values ($1,$2,$3,$4,$5,$6,current_date,current_date)', [firstName, lastName, userName, emailId, password, isActive])
  };

  async getAll(){
  var _data;
  await conn.query('select * from user_data')
      .then(function (data) {
        _data = data;
      })
      .catch(function (error) {
        console.log('ERROR:', error)
      })
      console.log( _data)
      return _data;
  }

}

module.exports = UserDao;

