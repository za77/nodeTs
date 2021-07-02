import express from "express";
import controller from "./user.controller";
// here we have problem with repeat initialization od express js
var router = express.Router();

router.get("",controller.fineAll);
router.post("",controller.create);
router.get("/:id",controller.findOne);
router.put("/:id",controller.update);
router.delete("/:id",controller.remove);

export default router;

 