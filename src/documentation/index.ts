

export default{
  title:"Swagger testing api",
  swagger: '2.0',
  info: {
    description: "This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.",
    version: "1.0.0",
    title: "Swagger Petstore",
    termsOfService: "http://swagger.io/terms/",
    contact: {
      "email": "apiteam@swagger.io"
    },
  },
  produces: ["application/xml","application/json"],
  host: `localhost:1000`,
  basePath: "/api/v1",
  schemes : [
    "https",
    "http"
  ],

  paths: {
    //users api
    "/user": require("./module/user/user_route"),
    "/user/{id}": require("./module/user/user_id_route"),
    
    //roles api 
    "/role": require("./module/role/role_route"),
   
    //Authentication API request
    "/auth": require("./module/role/role_route")

    }
}