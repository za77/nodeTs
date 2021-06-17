module.exports = {
    get:{
        tags:["user"],
        description:"Get user information from server",
        produces: ['application/json'],
        parameters:[require('../../request/user.request')],
        response: require('../../request/user.request')
    }
}