import { Router } from "express";
import user_router from "./components/user/user.router";
// router registration 
const route : any = [
    user_router 
    ];

export default  route;