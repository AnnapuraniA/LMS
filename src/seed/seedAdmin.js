import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { sequelize } from "../config/db.js";
import { User } from "../models/index.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await sequelize.sync({ alter: true });

    const username = "admin";
    const password = "admin123";
    const hashed = await bcrypt.hash(password, 10);

    const [admin, created] = await User.findOrCreate({
      where: { username },
      defaults: {
        name: "Super Admin",
        username,
        password: hashed,
        role: "admin",
      },
    });

    if (created) {
      console.log("✅ Admin user created:", { username, password });
    } else {
      console.log("⚠️ Admin already exists with username:", username);
    }

    process.exit();
  } catch (err) {
    console.error("❌ Error seeding admin:", err);
    process.exit(1);
  }
};

seedAdmin();
