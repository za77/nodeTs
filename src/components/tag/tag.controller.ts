import mongoose from "mongoose";
var model  =  require("../../schema/tag.schema");
import {Request , Response} from "express";

export default {

//? Have to find a way to auto complete the mongoose methods 
fineAll: (async (req :Request,res:Response) =>{
     model  = mongoose.model("user");
    var data = await model.find();
    return res.send(data);
}),
findOne: (async (req :Request,res:Response) =>{
    var id = req.params.id; 
     var data = await model.findById(id);
     return res.send(data);
}),

create:(async (req:Request,res:Response)=>{
    // var userModel = mongoose.model("user");
    const { body } = req;
    const obj = new model({
        name: body.name,
        description: body.description,
      });
      try {

        const data = await obj.save();
        res.status(201).json({ data });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    
}),

update:((req:Request,res:Response)=>{
    return res.send({"message":"re run the project code"});
}),
remove:((req:Request,res:Response)=>{

    return res.send({"message":"re run the project code"});
}),



}