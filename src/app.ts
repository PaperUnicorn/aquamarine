import express from 'express';
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import 'reflect-metadata';

import config from './configuration/ormconfig';
// initialize configuration
dotenv.config();
// only after configuring env can you call a conenction
import { connection } from './configuration/connection'
const conn = connection; //doing shady stuff

const port = process.env.SERVER_PORT;

import usersRouter from './routes/UserRoutes';
import projectRouter from './routes/ProjectRoutes';
import boardRouter from './routes/BoardRoutes';
import listRouter from './routes/ListRoutes';

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", usersRouter);
app.use("/",projectRouter);
app.use("/",boardRouter);
app.use("/",listRouter);
// start the express server
app.listen( port, () => {
	// tslint:disable-next-line:no-console
	console.log( `server started at http://localhost:${ port }` );
} );
