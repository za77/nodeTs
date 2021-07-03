import controller from "./auth.controller";
import express from "express";
// here we have problem with repeat initialization od express js
var router = express.Router();

router.post("/auth/login",controller.login);
router.post("auth/register",controller.register);
router.post("auth/refresh",controller.refresh);
router.post("auth/resend-otp",controller.resendOtp);
router.post("auth/resend-email",controller.resendEmail);
router.post("auth/logout",controller.logout);

export default router;