import { getConnection } from 'typeorm';
import { Team } from './../model/Team';
import { UserTeamMapping } from './../model/UserTeamMapping';

export default class TeamController{
    constructor(){}
    async  getAllTeams(){
        const rowcount = getConnection().getRepository(Team).find();
        return rowcount;
    }
    async saveTeam(data : any){
        return getConnection().getRepository(Team).save(data).catch(error =>{console.log(error);return error.detail});
    }

    async getMembersOfTeam(){
        const categoriesWithQuestions = await getConnection()
            .getRepository(Team).find({relations:['users']})
            return categoriesWithQuestions;
    }

    async assignUserToTeam(data : any){
        const insertedValue = await getConnection().getRepository(UserTeamMapping).save(data);
        return insertedValue;
    }
}