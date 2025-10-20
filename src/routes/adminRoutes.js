import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Protected test route for admin dashboard
router.get("/dashboard", authMiddleware(["admin"]), (req, res) => {
  res.json({ success: true, message: "Welcome Admin Dashboard!" });
});

export default router;
