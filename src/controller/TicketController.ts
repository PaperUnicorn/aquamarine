import { getConnection } from 'typeorm';
import { Ticket } from './../model/Ticket';

export default class TicketController{
    constructor(){}
    async  getAllTickets(){
        const rowcount = getConnection().getRepository(Ticket).find();
        return rowcount;
    }
    async saveTicket(data : any){
        return getConnection().getRepository(Ticket).save(data).catch(error =>{return error.detail});
    }

    async getTasksOfTickets(){
        return getConnection().getRepository(Ticket).find({ relations : ['task']}) 
    }

}