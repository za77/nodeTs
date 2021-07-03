import { Request, Response } from "express";
import mongoose from "mongoose";
var Schema  =  require("../../schema/role.schema");
import AuthService from "../../services/auth.service";
import { _login, _user } from "../../models/user";



export default {

//? Have to find a way to auto complete the mongoose methods 
login: (async (req :Request,res:Response) => {
  try{
  console.log("login");
  var  authService = new AuthService();
  console.log( req.body);
    var  body : _login = req.body;
    console.log("request",body.mobile);
    const userModel  = mongoose.model("user");
    var user = await userModel.findOne({mobile:"+919677573318" , password:"123456"});
    var idToken = authService.accessToken({mobile: user?.get("mobile") , id: user?._id });
    var refreshToken = authService.refreshToken({ id: user?._id });
    var data = { id_token : idToken , refreshToken:refreshToken };
    return res.send(data); 
  }
    catch(err){
      return res.send({code :404  , message : err.message });
    }
      
  }),
    register:(async()=>{

    }),
    resendOtp : (()=>{

    }),
    logout : (()=>{

    }),
    resendEmail : (()=>{

    }),
    refresh : (()=>{

    })


}