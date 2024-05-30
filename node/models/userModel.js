import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UserModel = db.define('users', {
    documento: { type: DataTypes.NUMBER },
    nombres: { type: DataTypes.STRING },
    apellidos: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING},
    direccion: { type: DataTypes.STRING},
    tipo_de_usuario: { type: DataTypes.CHAR}
})

export default UserModel