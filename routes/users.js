var express = require('express');
var router = express.Router();

var UserService = require('../services/UserService');
var userService = new UserService();


router.get('/all',async function(req,res,next){
  let result = await userService.getAll();
  res.send(result)
})

router.post('/saveUser', async function (req, res, next) {
  var data = req.body;
  let result = await userService.saveUser(data);
  res.sendStatus(200);

});


router.post('/validate', async function (req, res, next) {

  var data = req.body;
  var result = await userService.validateUser(data);

  if(result === true){
    res.sendStatus(200);
  }
  else{
    res.sendStatus(500);
  }

});


module.exports = router;