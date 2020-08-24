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
router.post(path + '/login', (req, res, next) => {

    passport.authenticate('local', function (err: any, user: any, info: any) {
        if (err) { return next(err); }
        if (!user) { return res.status(401).send("Unauthorized"); }
        req.logIn(user, function (err) {
            if (err) { return next(err); }
            return res.status(200).send("Authorized");
        });
    })(req, res, next);

});

router.get(path + "/logout", (req, res) => {
    req.logout();
    return res.status(200).send("Logout");
})

export default router;
