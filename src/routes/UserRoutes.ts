import express from 'express';
import UserController from './../controller/UserController';
var passport = require('passport');

const router = express.Router();
const uc = new UserController();
const path = '/user';

router.get(path + '/all', async (req, res) => {
    await uc.getAllUsers()
        .then(result => {
            if (result) res.status(200).send(result)
            else res.status(404).send('Not Found')
        })
        .catch(error => {
            console.log(error)
            res.status(500).send('some error occured')
        })
});

router.get(path + '/getUserById/:id', async (req, res) => {
    const id = req.params.id;
    await uc.getUserById(id)
        .then(result => {
            if (result) res.status(200).send(result)
            else res.status(404).send('Not Found')
        })
        .catch(error => {
            res.status(500).send('some error occured')
        })
});

router.post(path + '/save', async (req, res) => {
    await uc.saveUser(req.body)
        .then(result => { res.status(200).send(result) })
        .catch(error => { res.status(500).send('some error occured') })
});

router.put(path + '/update', async (req, res) => {

    await uc.getAllUsers()
        .then(result => { res.status(200).send(result) })
        .catch(error => { res.status(500).send('some error occured') })
});

router.get(path + '/deActivate/:id', async (req, res) => {
    const id = req.params.id;
    await uc.deactivateUserById(id)
        .then(result => { res.status(200).send(result) })
        .catch(error => { res.status(500).send(error) })
});

router.get(path + '/activate/:id', async (req, res) => {
    const id = req.params.id;
    await uc.activateUserById(id)
        .then(result => { res.status(200).send(result) })
        .catch(error => { res.status(500).send(error) })
});


// This Funtions gets JsonData in this format -> 
// {	
//     "username":"abc@xyz.com",  
//     "password":"1234"
// }
// Currently accepts login using 'email'.. so username value should be emailId.
router.post(path + '/validate', (req, res, next) => {
    passport.authenticate('local', function (err: any, user: any, info: any) {
        if (err) { return next(err); }
        if (!user) { return res.status(500).send('UserName or password is incorrect'); }

        req.logIn(user, function (err) { 
            if (err) { return next(err); }
            return res.status(200).send("User SucessFully Authenticated");
        });
    })(req, res, next);
});

export default router;
