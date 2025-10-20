import express from "express";
import { createUser } from "../controllers/userController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", authenticate, isAdmin, createUser);

export default router;
