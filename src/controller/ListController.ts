import { getConnection } from 'typeorm';
import { List } from './../model/List';

export default class ListController{
    constructor(){}
    async  getAllLists(){
        const rowcount = getConnection().getRepository(List).find();
        return rowcount;
    }
    async saveList(data : any){
        return getConnection().getRepository(List).save(data).catch(error =>{return error.detail});
    }

    async getBoardsOfList(){
        return getConnection().getRepository(List).find({ relations : ['board']}) 
    }

    async getTasksOfList(){
        return getConnection().getRepository(List).find({ relations : ['tasks']})
    }

}