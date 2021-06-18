import mongoose from "mongoose";
var Schema  =  require("../../schema/role.schema");

export default {
//? Have to find a way to auto complete the mongoose methods 
fineAll: (async (req :any,res:any) =>{
    Schema  = mongoose.model("role");
    var user = await Schema.find();
    return res.send(user);
}),
findOne: (async (req :any,res:any) =>{
     var user = await Schema.findById("60cb2b59ee5f50501c20033f");
     return res.send(user);
}),
create:(async (req:any,res:any)=>{
    // var userModel = mongoose.model("user");
    const {body} = req;
    const role = new Schema({
        name: body.name,
        display: body.display,
        description:body.description,
      });
      try {
        const new_role = await role.save();
        res.status(201).json({ new_role });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    
}),
update:((req:any,res:any)=>{
    return res.send({"message":"re run the project code"});
}),
remove:((req:any,res:any)=>{
    return res.send({"message":"re run the project code"});
})


}