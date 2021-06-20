"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.json());
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://mongo:27017/case_study', {
// useNewUrlParser: true
// }).then(() => {
//    require("./schema/user.schema");
//   console.log("Successfully connected to the database");
// }).catch(err => {
//   console.log('Could not connect to the database.', err);
//   process.exit();
// });
//! 20-06-2021 learn about docker container and automatic deployment to do work much better
//! note the express app instance have to be created only once in the app life_cycle
//? You have to handle request and validate the headers and allow cross origin
//? after prepare single req and respond object with all params 
//? add authentication middle ware , override authentication middle ware
//? there after only it will move to the controller part
//@ you have to keep write the code when you want you can add extra layer or improve the architecture 
// var routeMap =  [].concat.apply([], router);
var swaggerUi = require('swagger-ui-express');
var documentation_1 = __importDefault(require("./documentation"));
var options = {
    explorer: true
};
var document = JSON.stringify(documentation_1.default);
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
app.use('/api/v1/documentation', swaggerUi.serve, swaggerUi.setup(documentation_1.default, options));
// app.use('/api/v1/documentation',(req,res)=>{
//     return  res.set({ 'Content-Type': 'application/json; charset=utf-8' })
//      .status(200)
//      .send(document);
//  });
var user_router_1 = __importDefault(require("./components/user/user.router"));
var middleware = function (req, res) {
    console.log("only middle ware called");
};
// app.use(middleware)
app.use('/api/v1/test', function (req, res) {
    res.send("testing app");
});
app.use('/api/v1/user', user_router_1.default);
// app.use(routeMap);
app.listen(80, function () { return console.log("Server running"); });
//  module.exports = app;
