 var conn =  require('./../bin/rdbmsConnection');

    module.exports = {
    findUserByEmail: async function(emailId) {
      var userData;
    await conn.one('select * from aqua.users_data where emailId=$1',[emailId])
    .then(function (data) {
      userData = data;
    })
    .catch(function (error) {
      console.log('ERROR:', error)
    })
     return userData;
    },


    saveUser: async function(firstName,lastName,userName,emailId,password,isActive) {
      var response=200;
      await conn.one('select max(id) from aqua.users_data')
      .then(async function (data) {
        id=parseInt( data.max+1);

       await conn.query('insert into aqua.users_data values ($1,$2,$3,$4,$5,$6,$7,current_date,current_date)',[id,firstName,lastName,userName,emailId,password,isActive])
      
      }).catch(function (error) {
        console.log('ERROR:', error)
        response=500;
      });
      return response;
    }

    };

