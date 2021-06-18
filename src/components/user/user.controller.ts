import mongoose from "mongoose";
var userModel  =  require("../../schema/user.schema");

export default {
//? Have to find a way to auto complete the mongoose methods 
fineAll: (async (req :any,res:any) =>{
  console.log("request");
    userModel  = mongoose.model("user");
    var user = await userModel.find();
    return res.send(user);
}),
findOne: (async (req :any,res:any) =>{
     var user = await userModel.findById("60cb2b59ee5f50501c20033f");
     return res.send(user);
}),
create:(async (req:any,res:any)=>{
    // var userModel = mongoose.model("user");
    const {body} = req;
    const user = new userModel({
        firstName: body.firstName,
        lastName: body.lastName,
        mobile:body.mobile,
        password:"123456"
      });
      try {
        const newUser = await user.save();
        res.status(201).json({ newUser });
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