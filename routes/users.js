var express = require('express');
var router = express.Router();

var UserDao = require('./../db/usersDao');
var userDao = new UserDao();

/* GET users listing. */
router.post('/validate', async function (req, res, next) {

  var pwd = req.body.password;
  var email = req.body.emailId;

  var result = await userDao.findUserByEmail(email);

  if (result.password === pwd) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }

});


router.post('/saveUser', async function (req, res, next) {
  var data = req.body;
  let result = await userDao.saveUser(data.firstName, data.lastName, data.userName, data.emailId, data.password, data.isActive);

  res.sendStatus(result);

});

module.exports = router;