import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Department extends Model {}

Department.init(
  {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  { sequelize, modelName: "Department" }
);

export default Department;
