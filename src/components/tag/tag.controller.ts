import mongoose from "mongoose";
var model  =  require("../../schema/tag.schema");
import {Request , Response} from "express";

export default {

//? Have to find a way to auto complete the mongoose methods 
fineAll: (async (req :Request,res:Response) =>{
     model  = mongoose.model("tag");
    var data = await model.find();
    return res.send(data);
}),
findOne: (async (req :Request,res:Response) =>{
    var id = req.params.id; 
     var data = await model.findById(id);
     if(data)
     return res.send(data);
     else
     return res.status(404).send({message:"No record found",data:{}})
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

update:(async (req:Request,res:Response)=>{
  var id = req.params.id
  var body = req.body;
  var tagModel  = mongoose.model("tag");
  tagModel.findByIdAndUpdate(id,body,(err ,result)=>{
    if(err)
      return res.status(400).json({message:err.message});
    return res.status(400).json({message:"Record updated successfully",data:result});
  })
}),

remove:((req:Request,res:Response)=>{
  var id = req.params.id
  var body = req.body;
  var tagModel  = mongoose.model("tag");
  tagModel.findByIdAndRemove(id,null,(err,result)=>{
    if(err)
      return res.status(400).json({message:err.message});
    return res.status(400).json({message:"Record removed successfully",data:result});
  })
})

}