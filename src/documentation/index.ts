import { response } from "express";

export default{
    title:"Swagger testing api",
  swagger: '2.0',
  info: {
    description: 'Testing API documentation',
  },
  host: `http://localhost/1000`,
  basePath: "/api/vi",
  schemes: ["http"],
  paths: {
    "/user":{
        get:{
            tags:["user"],
            description:"Get user information from server",
            produces: ['application/json'],
            parameters:[require('./request/user.request')],
            response: require('./request/user.request')
        }
    }

    }
}