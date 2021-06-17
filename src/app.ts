import express from "express";
import router from './router';
import mongoose from 'mongoose';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/case_study', {
useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});

//! note the express app instance have to be created only once in the app life_cycle

//? You have to handle request and validate the headers 
//? And add the security check for the cross origin policy
//? after prepare single req and respond object with all params 
//? add authentication middle ware
//? there after only it will move to the controller part

//@ you have to keep write the code when you want you can add extra layer or improve the architecture 
// var routeMap =  [].concat.apply([], router);
const swaggerUi = require('swagger-ui-express');
import swaggerDocument from "./documentation";

var options = {
  explorer: true
};
var  document  = JSON.stringify(swaggerDocument);
app.use('/api/v1/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
// app.use('/api/v1/documentation',(req,res)=>{
//     return  res.set({ 'Content-Type': 'application/json; charset=utf-8' })
//      .status(200)
//      .send(document);
//  });
import userRouter from "./components/user/user.router";
app.use('/api/v1/user',userRouter);

// app.use(routeMap);
app.listen(1000,()=>console.log("Server running"));
