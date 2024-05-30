import db from "../database/db.js";
import { DataTypes } from "sequelize";

const AreaModel = db.define('area', {
    Tipo_De_Area: { type: DataTypes.CHAR} 
})

export default AreaModel