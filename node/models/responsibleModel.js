import db from "../database/db.js";
import { DataTypes } from "sequelize";

const responsibleModel = db.define('responsable', {
    Name: { type: DataTypes.STRING },
    Email: { type: DataTypes.STRING, unique: true, allowNull: false },
    Password: { type: DataTypes.STRING, allowNull: false },
});
export default responsibleModel