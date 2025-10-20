import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Assignment extends Model {}

Assignment.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    dueDate: { type: DataTypes.DATE, allowNull: false },
  },
  { sequelize, modelName: "Assignment" }
);

export default Assignment;
