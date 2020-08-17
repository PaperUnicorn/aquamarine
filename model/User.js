var  conn  = require ('../configuration/postgres');
const { func } = require('../configuration/postgres');
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
          const rows = await conn.one('select * from user_data where email = $1', [email])
               .then(e => { return e})
               .catch(e => {console.log(e)});
          return rows;
     }

     async function save(user){
          const rows = await conn.query('insert into user_data (first_name, last_name, user_name, email, password, is_active, created_on, last_updated_on) values ($1,$2,$3,$4,$5,$6,current_date,current_date)', [user.firstName, user.lastName, user.userName, user.emailId, user.password, user.isActive])
               .then(e => { return e})
               .catch(e => {console.log(e)});
          return rows;
     }

     async function update(user){
          const rows = await conn.query('update user_data set first_name = $1, last_name = $2, user_name = $3, last_updated_on = now()  where email = $4', [user.firstName, user.lastName, user.userName ,user.emailId])
               .then(e => { return e})
               .catch(e => {console.log(e)});
          return rows;
     }

     async function deleteuser(email){
          const rows = await conn.query('delete from user_data where email = $1' ,[email])
               .then(e => { return e})
               .catch(e => {console.log(e)});
          return rows;
     }


module.exports = {getOne , getAll , getByEmail , getByName , save , update , deleteuser};