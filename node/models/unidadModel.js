import db from "../database/db";
import { DataTypes } from "sequelize";

const UnidadModel = db.define('unidad', {
    Nombre_Unidad: { type: DataTypes.STRING}
})

export default UnidadModel