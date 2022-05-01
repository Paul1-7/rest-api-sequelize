import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";

export const Project = sequelize.define(
  "project",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    priority: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  },
  { timestamp: true }
);

Project.hasMany(Task, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetKey: "id",
});
