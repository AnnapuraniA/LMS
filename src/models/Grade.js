import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Grade extends Model {}

Grade.init(
  {
    grade: { type: DataTypes.STRING, allowNull: false },
    feedback: { type: DataTypes.TEXT },
  },
  { sequelize, modelName: "Grade" }
);

export default Grade;
