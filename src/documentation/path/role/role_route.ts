module.exports = {
    get:{
        tags:["role"],
        consumes:["application/json"],
        produces:["application/json"],
        description:"Get Role information from server",
        parameters:[require('../../request/role.request')],
        response: require('../../request/role.request')
    },
    put:{
        tags:["role"],
        description:"Get Role information from server",
        produces: ['application/json'],
        parameters:[require('../../request/role.request')],
        response: require('../../request/role.request')

    },
    post:{
        tags:["role"],
        description:"Create Role information from server",
        produces: ['application/json'],
        parameters:[require('../../request/role.request')],
        response: require('../../request/role.request')

    },
}