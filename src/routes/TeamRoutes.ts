import express from 'express';
import TeamController from './../controller/TeamController';


const router = express.Router();
const controller = new TeamController();
const path = '/team';


router.get(path+'/all',async (req,res)=>{
    await controller.getAllTeams()
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
    await controller.saveTeam(req.body)
    .then(result => {res.status(200).send(result)})
    .catch(error => {console.log(error);res.status(500).send('some error occured, detail : '+error.detail)})
});

router.post(path+'/assign',async (req,res)=>{
    await controller.assignUserToTeam(req.body)
    .then(result => {res.status(200).send(result)})
    .catch(error => {console.log(error);res.status(500).send('some error occured, detail : '+error.detail)})
});

router.get(path+'/members',async (req,res)=>{
    await controller.getMembersOfTeam()
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