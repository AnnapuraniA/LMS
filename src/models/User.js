import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class User extends Model {}

User.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: {
      type: DataTypes.ENUM("admin", "faculty", "student"),
      allowNull: false,
    },
  },
  { sequelize, modelName: "User" }
);

export default User;
