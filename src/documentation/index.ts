

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
    "/user": require("./path/user/user_route")
    }
}