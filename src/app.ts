import express from "express";
import router from './router';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const ACCESS_TOKEN = "ACCESS_TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/case_study', {
useNewUrlParser: true
}).then(() => {
   require("./schema/user.schema");
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});

//! 20-06-2021 learn about docker container and automatic deployment to do work much better
//! note the express app instance have to be created only once in the app life_cycle

//? You have to handle request and validate the headers and allow cross origin
//? after prepare single req and respond object with all params 
//? add authentication middle ware , override authentication middle ware
//? there after only it will move to the controller part

//@ you have to keep write the code when you want you can add extra layer or improve the architecture 
// var routeMap =  [].concat.apply([], router);
const swaggerUi = require('swagger-ui-express');
import swaggerDocument from "./documentation";

var options = {
  explorer: true
};
var  document  = JSON.stringify(swaggerDocument);

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
  next();
});
var doc = require("./swagger.json");
// app.use('/api/v1/test-documentation', swaggerUi.serve, swaggerUi.setup(doc, options));
app.use('/api/v1/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
// app.use('/api/v1/documentation',(req,res)=>{
//     return  res.set({ 'Content-Type': 'application/json; charset=utf-8' })
//      .status(200)
//      .send(document);
//  });
import userRouter from "./components/user/user.router";
import authRouter from "./components/auth/auth.router";

var middleware = (req :any,res:any)=>{
  console.log("only middle ware called");
}

import jwt from "jsonwebtoken";
// app.use(middleware)
app.use('/api/v1/test',(req,res)=>{

let accessToken = jwt.sign(
  { user: { id:"0", name:"Shiva" } },
  ACCESS_TOKEN,
  {
    expiresIn: "60m",
  }
);
res.send({token:accessToken});
});

app.use("/api/v1/refresh",async (req,res)=>{
  
    try {
      
      let refreshToken = jwt.sign(
        { user: { _id:"0", username:"shiva" } },
        REFRESH_TOKEN,{ expiresIn: "1d" }
      );
      const payload = jwt.verify(refreshToken, REFRESH_TOKEN);
      return res.send({refresh:refreshToken , payload :payload});
    } catch (error) {
      console.error(error);
      return;
    }


});

app.use('/api/v1/user',userRouter);
app.use('/api/v1/auth',authRouter);

// app.use(routeMap);
app.listen(8080,()=>console.log("Server running 8080"));
//  module.exports = app;
