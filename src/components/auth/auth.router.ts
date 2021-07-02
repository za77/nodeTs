import controller from "./auth.controller";
import express from "express";
// here we have problem with repeat initialization od express js
var router = express.Router();

router.post("/login",controller.login);
router.post("/register",controller.login);
router.post("/refresh",controller.login);
router.post("/resend-otp",controller.login);
router.post("/resend-email",controller.login);
router.post("/logout",controller.login);

export default router;