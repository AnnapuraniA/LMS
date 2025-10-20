import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class CourseContent extends Model {}

CourseContent.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    contentType: { type: DataTypes.ENUM("file", "link", "text"), allowNull: false },
    contentUrl: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
  },
  { sequelize, modelName: "CourseContent" }
);

export default CourseContent;
