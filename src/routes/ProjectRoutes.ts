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

router.get(path+'/:id/users/',async (req,res)=>{
    await controller.getUsersOfProject(parseInt(req.params.id))
    .then(result => {
        if(result)res.status(200).send(result)
        else res.status(404).send('Not Found')
    })
    .catch(error => {
        console.log(error)
        res.status(500).send('some error occured')
    })
});

router.get(path+'/:id/boards',async (req,res)=>{
    await controller.getBoardsOfProject(parseInt(req.params.id))
    .then(result => {
        if(result)res.status(200).send(result)
        else res.status(404).send('Not Found')
    })
    .catch(error => {
        console.log(error)
        res.status(500).send('some error occured')
    })
});

router.get(path+'/:id/teams',async (req,res)=>{
    await controller.getAllTeamsOfProject(parseInt(req.params.id))
    .then(result => {
        if(result)res.status(200).send(result)
        else res.status(404).send('Not Found')
    })
    .catch(error => {
        console.log(error)
        res.status(500).send('some error occured')
    })
});

router.get(path+'/:id/toggle',async (req,res)=>{
    await controller.toggleProjectStatus(parseInt(req.params.id))
    .then(result => {
        if(result)res.status(200).send(result)
        else res.status(404).send('Not Found')
    })
    .catch(error => {
        console.log(error)
        res.status(500).send('some error occured')
    })
});

router.post(path+'/:id/saveTeam',async (req,res)=>{
    await controller.addTeamToProject(parseInt(req.params.id),req.body.teamId)
    .then(result => {res.status(200).send(result)})
    .catch(error => {console.log(error);res.status(500).send('some error occured')})
});

export default router;