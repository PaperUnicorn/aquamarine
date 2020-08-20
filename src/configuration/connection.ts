import {createConnection} from "typeorm";
import ormconfig from './ormconfig'
export const connection = createConnection(ormconfig);