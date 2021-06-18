module.exports = {
    get:{
        tags:["user"],
        summary: "Add a new pet to the store",
        operationId: "addPet",
        description:"Get user list",
        produces: ['application/json'],
        consumes: ['application/json'],
        parameters:[],
        responses: require("../response")
    }
}