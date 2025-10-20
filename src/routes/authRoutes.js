// backend/src/routes/authRoutes.js
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";

const router = express.Router();

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // check if user exists
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // generate JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1h" }
    );

    res.json({
      token,
      role: user.role,
      username: user.username,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
