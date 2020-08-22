import { getConnection } from 'typeorm';
import { Task } from './../model/Task';

export default class TaskController{
    constructor(){}
    async  getAllTasks(){
        const rowcount = getConnection().getRepository(Task).find();
        return rowcount;
    }
    async saveTask(data : any){
        return getConnection().getRepository(Task).save(data).catch(error =>{return error.detail});
    }

    async getListsOfTasks(){
        return getConnection().getRepository(Task).find({ relations : ['list']}) 
    }

    async getTicketsOfTasks(){
        return getConnection().getRepository(Task).find({relations:['tickets']});
    }

}