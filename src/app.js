import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

// Root
app.get("/", (req, res) => {
  res.send("LMS Backend Running ✅");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
