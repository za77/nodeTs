import express from "express";
import controller from "./user.controller";
// here we have problem with repeat initialization od express js
const app = express();
export default app.get("/req",controller.test)
