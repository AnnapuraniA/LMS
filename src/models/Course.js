import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Course extends Model {}

Course.init(
  {
    code: { type: DataTypes.STRING, allowNull: false, unique: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
  },
  { sequelize, modelName: "Course" }
);

export default Course;
