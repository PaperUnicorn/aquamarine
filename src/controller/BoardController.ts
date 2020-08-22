import { getConnection } from 'typeorm';
import { Board } from './../model/Board';

export default class BoardController{
    constructor(){}
    async  getAllBoards(){
        const rowcount = getConnection().getRepository(Board).find();
        return rowcount;
    }
    async saveBoard(data : any){
        return getConnection().getRepository(Board).save(data);
    }

    async getProjectsOfBoards(){
        return getConnection().getRepository(Board).find({ relations : ['project']}) //we get user who created this project
    }

    async getListsOfBoards(){
        return getConnection().getRepository(Board).find({ relations : ['lists']}) 
    }

}