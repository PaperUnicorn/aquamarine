import express from 'express';
import BoardController from './../controller/BoardController';


const router = express.Router();
const controller = new BoardController();
const path = '/board';


router.get(path+'/all',async (req,res)=>{
    await controller.getAllBoards()
    .then(result => {
        if(result)res.status(200).send(result)
        else res.status(404).send('Not Found')
    })
    .catch(error => {
        console.log(error)
        res.status(500).send('some error occured')
    })
});

router.post(path+'/save',async (req,res)=>{
    await controller.saveBoard(req.body)
    .then(result => {res.status(200).send(result)})
    .catch(error => {console.log(error);res.status(500).send('some error occured')})
});

router.get(path+'/projects',async (req,res)=>{
    await controller.getProjectsOfBoards()
    .then(result => {
        if(result)res.status(200).send(result)
        else res.status(404).send('Not Found')
    })
    .catch(error => {
        console.log(error)
        res.status(500).send('some error occured')
    })
});

export default router;