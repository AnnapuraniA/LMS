import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Submission extends Model {}

Submission.init(
  {
    fileUrl: { type: DataTypes.STRING },
    submittedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize, modelName: "Submission" }
);

export default Submission;
