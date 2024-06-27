import db from "../database/db.js";
import { DataTypes } from "sequelize";

const FormatoModel = db.define('formatos', {
    id_formato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_formato: { type: DataTypes.STRING },
    cod_formato: { type: DataTypes.STRING },
    ver_formato: { type: DataTypes.STRING },
    est_formato: { type: DataTypes.STRING },
    id_responsable: { type: DataTypes.INTEGER },
    archivo: { type: DataTypes.BLOB },
    nom_magnetico: { type: DataTypes.STRING },
    fec_actualizacion: { type: DataTypes.DATE },
    id_procedimiento: { type: DataTypes.INTEGER },
    id_unidad: { type: DataTypes.INTEGER }
}, {
    tableName: 'formatos',  // Nombre de la tabla en la base de datos
    timestamps: false       // Desactivar timestamps automáticos (createdAt, updatedAt)
});

export default FormatoModel;
