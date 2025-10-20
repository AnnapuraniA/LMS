import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class CourseOffering extends Model {}

CourseOffering.init(
  {
    year: { type: DataTypes.INTEGER, allowNull: false },
    semester: { type: DataTypes.ENUM("Spring", "Summer", "Fall", "Winter"), allowNull: false },
    className: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: "CourseOffering" }
);

export default CourseOffering;
