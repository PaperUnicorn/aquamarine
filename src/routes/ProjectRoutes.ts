import express from 'express';
import ProjectController from './../controller/ProjectController';

const router = express.Router();
const controller = new ProjectController();
const path = '/project';

router.get(path+'/all',async (req,res)=>{
    await controller.getAllUsers()
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
    await controller.saveProject(req.body)
    .then(result => {res.status(200).send(result)})
    .catch(error => {console.log(error);res.status(500).send('some error occured')})
});

router.get(path+'/users/all',async (req,res)=>{
    await controller.getUsersOfProject()
    .then(result => {
        if(result)res.status(200).send(result)
        else res.status(404).send('Not Found')
    })
    .catch(error => {
        console.log(error)
        res.status(500).send('some error occured')
    })
});

router.get(path+'/boards/all',async (req,res)=>{
    await controller.getBoardsOfProject()
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