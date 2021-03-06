import express from 'express';
import UserController from './../controller/UserController';

const router = express.Router();
const uc = new UserController();
const path = '/user';

router.get(path + '/all', async (req, res) => {
    console.log(req.session.passport);
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

router.get(path + '/:id', async (req, res) => {
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

router.put(path + '/update', async (req, res) => {

    await uc.getAllUsers()
        .then(result => { res.status(200).send(result) })
        .catch(error => { res.status(500).send('some error occured') })
});

router.get(path + '/:id/deactivate', async (req, res) => {
    const id = req.params.id;
    await uc.deactivateUserById(id)
        .then(result => { res.status(200).send(result) })
        .catch(error => { res.status(500).send(error) })
});

router.get(path + '/:id/activate', async (req, res) => {
    const id = req.params.id;
    await uc.activateUserById(id)
        .then(result => { res.status(200).send(result) })
        .catch(error => { res.status(500).send(error) })
});

export default router;
