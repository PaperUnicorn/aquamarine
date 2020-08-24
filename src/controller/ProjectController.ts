import { getConnection } from 'typeorm';
import { Project } from '../model/Project';
import { Team } from '../model/Team';

export default class ProjectController{
    constructor(){}

    async  getAllUsers(){
        const rowcount = getConnection().getRepository(Project).find();
        return rowcount;
    }
    async saveProject(data : any){
        return getConnection().getRepository(Project).save(data);
    }

    async getUsersOfProject(pid : number){
        return getConnection().getRepository(Project).find({ relations : ['user'], where: { id : pid }}) //we get user who created this project
    }

    async getBoardsOfProject(pid : number){
        return getConnection().getRepository(Project).find({ relations : ['boards'], where: { id : pid }})
    }

    async toggleProjectStatus(pid : number ){
        const project  = await getConnection().getRepository(Project).findOne(pid);
        return await getConnection().getRepository(Project).save({id : pid , isActive : !project.isActive}) //maybe better way to do this
    }

    async getAllTeamsOfProject(pid : number){
        return await getConnection().getRepository(Project).find({ relations : ['teams'], where: { id : pid }})
    }

    async addTeamToProject(pid : number , _teamId : number){
        return await getConnection().createQueryBuilder().update(Team).set({project : pid}).where("id = :id",{id : _teamId}).execute(); // somethings get overly complicated even with type orm
    }

    async unassignTeamFromProject(pid : number , _teamId : number){
        return await getConnection().createQueryBuilder().update(Team).set({project : null}).where("id = :id",{id : _teamId}).execute(); // somethings get overly complicated even with type orm
    }



}