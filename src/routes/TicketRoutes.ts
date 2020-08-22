import express from 'express';
import TicketController from './../controller/TicketController';


const router = express.Router();
const controller = new TicketController();
const path = '/ticket';


router.get(path+'/all',async (req,res)=>{
    await controller.getAllTickets()
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
    await controller.saveTicket(req.body)
    .then(result => {res.status(200).send(result)})
    .catch(error => {console.log(error);res.status(500).send('some error occured, detail : '+error.detail)})
});

router.get(path+'/tasks',async (req,res)=>{
    await controller.getTasksOfTickets()
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