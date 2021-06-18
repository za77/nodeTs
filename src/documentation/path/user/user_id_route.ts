module.exports = {
    get:{
        tags:["user"],
        description:"Get Role information from server",
        produces: ['application/json'],
        parameters:[
        {
            in: 'path',
            name: 'id',
            description: 'user id',
            required: true,
            schema: {
              type: 'string',
            },
          }],
        operationId: "Get_User_List",
        consumes: ['application/json'],
        responses: require("../response")
    },
    put:{
        tags:["user"],
        description:"Get Role information from server",
        produces: ['application/json'],
        parameters:[require('../../request/role.request')],
        operationId: "Put_User",
        consumes: ['application/json'],
        responses: require("../response")

    },
    post:{
        tags:["user"],
        description:"Create Role information from server",
        produces: ['application/json'],
        parameters:[require('../../request/role.request')],
        operationId: "Post_User",
        consumes: ['application/json'],
        responses: require("../response")

    },
}