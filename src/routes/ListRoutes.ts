import express from 'express';
import ListController from './../controller/ListController';


const router = express.Router();
const controller = new ListController();
const path = '/list';


router.get(path+'/all',async (req,res)=>{
    await controller.getAllLists()
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
    await controller.saveList(req.body)
    .then(result => {res.status(200).send(result)})
    .catch(error => {console.log(error);res.status(500).send('some error occured, detail : '+error.detail)})
});

router.get(path+'/boards',async (req,res)=>{
    await controller.getBoardsOfList()
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