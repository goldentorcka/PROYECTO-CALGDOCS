import { Sequelize } from "sequelize";
import responsibleModel from "../models/userModel.js";
import { logger } from "../config/logger.js";

export const getALLresponsible = async (req, res) => {
    try {
        throw new Error('This is a test error'); // Forzar un error para probar el logging
        const responsible = await UserModel.findAll({ where: { role: 'responsible' } });
        res.json(responsible);
    } catch (error) {
        logger.error(error.message, { stack: error.stack });
        res.json({ message: error.message });
    }
    // TODO: Implementar el código para obtener todos los responsables
}




export const getResponsible = async (req, res) => {
    try {
        const responsible = await 
    }
}