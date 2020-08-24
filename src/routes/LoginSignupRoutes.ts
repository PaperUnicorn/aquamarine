import express from 'express';
import UserController from './../controller/UserController';
var passport = require('passport');

const router = express.Router();
const uc = new UserController();
const path = '/user';


router.post(path + '/register', async (req, res) => {
    await uc.saveUser(req.body)
        .then(result => { res.status(200).send(result) })
        .catch(error => { res.status(500).send('some error occured') })
});

// This Funtions gets JsonData in this format -> 
// {	
//     "username":"abc@xyz.com",  
//     "password":"1234"
// }
// Currently accepts login using 'email'.Avobe Object key name can be configured in passports.ts
// returns 401 for unauthorized
router.post(path + '/login', passport.authenticate('local'), (req, res) => {
    console.log(req.session);

    return res.status(200).send('Successfully Authenticated, this is ur JwtToken');
});

function checkAuthenticated(req:any,res:any,next:any){
	if(req.isAuthenticated()){
		return next(); //forwarding to the requested route
	} else{
		return res.status(401).send("Unauthorized"); //FrontEnd should send Back to login/register page
	}
}


export default router;
