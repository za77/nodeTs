import express from "express";
const app = express();
app.get('/req',(req,res)=>{
    return res.send({"message":"re run the project code"});
})

app.listen(1000,()=>console.log("Server running"))
