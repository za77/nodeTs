import express from "express";
import router from './router';

const app = express();

//! note the express app instance have to be created only once in the app life_cycle

//? You have to handle request and validate the headers 
//? And add the security check for the cross origin policy
//? after prepare single req and respond object with all params 
//? add authentication middle ware
//? there after only it will move to the controller part

//@ you have to keep write the code when you want you can add extra layer or improve the architecture 
app.use(router);
app.listen(1000,()=>console.log("Server running"));
