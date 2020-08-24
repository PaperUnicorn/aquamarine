import express from 'express';
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import 'reflect-metadata';

import config from './configuration/ormconfig';
// initialize configuration
dotenv.config();
// only after configuring env can you call a conenction
import { connection } from './configuration/connection';
const conn = connection; //doing shady stuff


var session = require('express-session');
var passport = require('passport');
require('./configuration/passports');

const port = process.env.SERVER_PORT;

import loginSignupRouter from './routes/LoginSignupRoutes';
import usersRouter from './routes/UserRoutes';
import projectRouter from './routes/ProjectRoutes';
import boardRouter from './routes/BoardRoutes';
import listRouter from './routes/ListRoutes';
import taskRouter from './routes/TaskRoutes';
import ticketRouter from './routes/TicketRoutes';
import teamRouter from './routes/TeamRoutes';

const app = express();

//middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	store: new (require('connect-pg-simple')(session))(),
	cookie: { 
		secure: false,
		maxAge: 24 * 60 * 60 * 1000 //24 hr
	}
}));
app.use(passport.initialize());
app.use(passport.session());



//Routes
app.use("/",loginSignupRouter);
app.use("/",checkAuthenticated,usersRouter);
app.use("/",checkAuthenticated,projectRouter);
app.use("/",checkAuthenticated,boardRouter);
app.use("/",checkAuthenticated,listRouter);
app.use("/",checkAuthenticated,taskRouter);
app.use("/",checkAuthenticated,ticketRouter);
app.use("/",checkAuthenticated,teamRouter);


function checkAuthenticated(req:any,res:any,next:any){
	if(req.isAuthenticated()){
		return next(); //forwarding to the requested route
	} else{
		return res.status(401).send("Unauthorized"); //FrontEnd should send Back to login/register page
	}
}

// start the express server
app.listen( port, () => {
	// tslint:disable-next-line:no-console
	console.log( `server started at http://localhost:${ port }` );
} );
