var  conn  = require ('../configuration/postgres');
     async function getOne(id){
          const row = await conn.oneOrNone('select * from user_data where email = $1',[id])
                         .then(result => { console.log(result); return result})
                         .catch(error => {console.log(error); return error;});
          return row;
     }

     async function getAll(){
          const rows = await conn.query('select * from user_data')
                         .then(result => { return result})
                         .catch(error => {console.log(error)});
          return rows;
     }

     async function getByName(name){
          await conn.one('select * from user_data where first_name = $1', name)
               .then(e => { return e})
               .catch(e => {console.log(e)});
     }
     async function getByEmail(email){
          await conn.one('select * from user_data where email = $1', email)
               .then(e => { return e})
               .catch(e => {console.log(e)});
     }

     async function save(user){
          await conn.query('insert into user_data (first_name, last_name, user_name, email, password, isActive, created_on, last_updated_on) values ($1,$2,$3,$4,$5,$6,current_date,current_date)', [user.firstName, user.lastName, user.userName, user.emailId, user.password, user.isActive])
               .then(e => { return e})
               .catch(e => {console.log(e)});
     }

module.exports = {getOne,getAll,getByEmail,getByName , save};