import { getConnection } from 'typeorm';
import { Project } from '../model/Project';

export default class ProjectController{
    constructor(){}

    async  getAllUsers(){
        const rowcount = getConnection().getRepository(Project).find();
        return rowcount;
    }
    async saveProject(data : any){
        return getConnection().getRepository(Project).save(data);
    }

    async getUsersOfProject(){
        return getConnection().getRepository(Project).find({ relations : ['user']}) //we get user who created this project
    }

    async getBoardsOfProject(){
        return getConnection().getRepository(Project).find({ relations : ['boards']})
    }
}