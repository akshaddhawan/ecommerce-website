import express from "express";
import { login, logout, signup, refreshToken, getProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.get("/profile", protectRoute, getProfile);

export default router;

// Code optimization: 2025-10-19T12:50:57.072Z
// Code optimization: 2025-10-19T14:47:20.345Z
// Code optimization: 2025-10-19T16:23:46.972Z
// Code optimization: 2025-10-18T11:03:00.542Z