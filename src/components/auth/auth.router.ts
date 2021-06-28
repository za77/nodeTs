import controller from "./auth.controller";
import express from "express";
// here we have problem with repeat initialization od express js
var router = express.Router();

router.post("/login",controller.login);
export default router;