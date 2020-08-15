var  express  = require('express');
const {
     getUserById , getAllUsers , getUserByName , getUserByEmail ,
     saveUser , updateUser , deleteUser , verifyUser
    
}  = require('../controller/UserController');

var router = express.Router();

router.get('/all',async (req,res)=>{
    await getAllUsers()
    .then(result => {
        if(result)res.status(200).send(result)
        else res.status(200).send('empty set')
    })
    .catch(error => {
        res.status(500).send('some error occured')
    })
});

router.get('/:id',async (req,res)=>{
    const id = req.params.id;
    await getUserById(id)
    .then(result => {
        if(result)res.status(200).send(result)
        else res.status(200).send('empty set')
    })
    .catch(error => {
        res.status(500).send('some error occured')
    })
});

router.post('/save',async (req,res)=>{
    await saveUser(req.body)
    .then(result => {res.status(200).send(result)})
    .catch(error => {res.status(500).send('some error occured')})
});

router.put('/update',async (req,res)=>{
    await getAllUsers()
    .then(result => {res.status(200).send(result)})
    .catch(error => {res.status(500).send('some error occured')})
});

router.delete('/delete',async (req,res)=>{
    await getAllUsers()
    .then(result => {res.status(200).send(result)})
    .catch(error => {res.status(500).send('some error occured')})
});

module.exports = router;
