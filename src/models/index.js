import Department from "./Department.js";
import User from "./User.js";
import Course from "./Course.js";
import CourseOffering from "./CourseOffering.js";
import FacultyAssignment from "./FacultyAssignment.js";
import Enrollment from "./Enrollment.js";
import CourseContent from "./CourseContent.js";
import Assignment from "./Assignment.js";
import Submission from "./Submission.js";
import Grade from "./Grade.js";

// Department ↔ Users
Department.hasMany(User, { foreignKey: "departmentId" });
User.belongsTo(Department, { foreignKey: "departmentId" });

// Department ↔ Courses
Department.hasMany(Course, { foreignKey: "departmentId" });
Course.belongsTo(Department, { foreignKey: "departmentId" });

// Course ↔ Offerings
Course.hasMany(CourseOffering, { foreignKey: "courseId" });
CourseOffering.belongsTo(Course, { foreignKey: "courseId" });

// Offerings ↔ Faculty
CourseOffering.belongsToMany(User, { through: FacultyAssignment, foreignKey: "offeringId" });
User.belongsToMany(CourseOffering, { through: FacultyAssignment, foreignKey: "facultyId" });

// Offerings ↔ Students
CourseOffering.belongsToMany(User, { through: Enrollment, foreignKey: "offeringId" });
User.belongsToMany(CourseOffering, { through: Enrollment, foreignKey: "studentId" });

// Offerings ↔ Content
CourseOffering.hasMany(CourseContent, { foreignKey: "offeringId" });
CourseContent.belongsTo(CourseOffering, { foreignKey: "offeringId" });

// Offerings ↔ Assignments
CourseOffering.hasMany(Assignment, { foreignKey: "offeringId" });
Assignment.belongsTo(CourseOffering, { foreignKey: "offeringId" });

// Assignment ↔ Submissions
Assignment.hasMany(Submission, { foreignKey: "assignmentId" });
Submission.belongsTo(Assignment, { foreignKey: "assignmentId" });

// Student ↔ Submissions
User.hasMany(Submission, { foreignKey: "studentId" });
Submission.belongsTo(User, { foreignKey: "studentId" });

// Submission ↔ Grade
Submission.hasOne(Grade, { foreignKey: "submissionId" });
Grade.belongsTo(Submission, { foreignKey: "submissionId" });

export {
  Department,
  User,
  Course,
  CourseOffering,
  FacultyAssignment,
  Enrollment,
  CourseContent,
  Assignment,
  Submission,
  Grade,
};
