import db from "../database/db.js";
import { DataTypes } from "sequelize";

const responsibleModel = db.define('responsable', {
    Nom_Responsable: { type: DataTypes.STRING }
});
export default responsibleModel