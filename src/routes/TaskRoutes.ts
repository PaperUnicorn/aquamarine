import express from 'express';
import TaskController from './../controller/TaskController';


const router = express.Router();
const controller = new TaskController();
const path = '/task';


router.get(path+'/all',async (req,res)=>{
    await controller.getAllTasks()
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
    await controller.saveTask(req.body)
    .then(result => {res.status(200).send(result)})
    .catch(error => {console.log(error);res.status(500).send('some error occured, detail : '+error.detail)})
});

router.get(path+'/lists',async (req,res)=>{
    await controller.getListsOfTasks()
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