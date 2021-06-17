import express from "express";
import router from './router';

const app = express();
app.use(router);
// [
//  app.get("/req",(req,res)=>{ return res.send({"message":"re run the project code"}); })
// ]



app.listen(1000,()=>console.log("Server running"));
