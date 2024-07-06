import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { checkoutSuccess, createCheckoutSession } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/create-checkout-session", protectRoute, createCheckoutSession);
router.post("/checkout-success", protectRoute, checkoutSuccess);

export default router;

// Code optimization: 2025-10-18T16:19:21.130Z