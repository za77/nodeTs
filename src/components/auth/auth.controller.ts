import { Request, Response } from "express";
import mongoose from "mongoose";
var Schema  =  require("../../schema/role.schema");
import AuthService from "../../services/auth.service";



export default {

//? Have to find a way to auto complete the mongoose methods 
login: (async (req :Request,res:Response) =>{
  var  authService = new AuthService();
    console.log("request");
      var accessToken = authService.accessToken({});
      const userModel  = mongoose.model("user");
      var user = await userModel.findOne({mobile:"+919677573318" , password:"123456"});
      return res.send(user);
  })


}