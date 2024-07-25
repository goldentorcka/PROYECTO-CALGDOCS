import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UserModel = db.define('users', {
    Name: { type: DataTypes.STRING },
    Email: { type: DataTypes.STRING, unique: true, allowNull: false },
    Password: { type: DataTypes.STRING, allowNull: false },
});
export default UserModel