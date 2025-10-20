import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Enrollment extends Model {}

Enrollment.init({}, { sequelize, modelName: "Enrollment" });

export default Enrollment;
