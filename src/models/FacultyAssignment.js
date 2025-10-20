import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class FacultyAssignment extends Model {}

FacultyAssignment.init({}, { sequelize, modelName: "FacultyAssignment" });

export default FacultyAssignment;
