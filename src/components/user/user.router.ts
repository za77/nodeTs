import express from "express";
import controller from "./user.controller";
// here we have problem with repeat initialization od express js
var router = express.Router();

router.get("user",controller.fineAll);
router.post("user",controller.create);
router.get("user/:id",controller.findOne);
router.put("user/:id",controller.update);
router.delete("user/:id",controller.remove);

export default router;

 