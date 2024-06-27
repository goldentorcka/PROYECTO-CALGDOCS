import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UserModel = db.define('users', {
     id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
     },
    Doc_User: { type: DataTypes.NUMBER },
    Nom_User: { type: DataTypes.STRING },
    Ape_User: { type: DataTypes.STRING }, 
    Cor_User: { type: DataTypes.STRING, unique: true, allowNull: false },
    Pas_User: { type: DataTypes.STRING, allowNull: false },
    Nom_Usuario: { type: DataTypes.STRING},
    Fec_User: { type: DataTypes.DATE}
})



export default UserModel