import express from "express";
import controller from "./user.controller";
// here we have problem with repeat initialization od express js
var router = express.Router();

router.get("/add",controller.test);
router.post("/update",controller.test);
router.get("/edit/:id",controller.test);
router.delete("/remove/:id",controller.test);
router.put("/update/:id",controller.test);

export default router;

