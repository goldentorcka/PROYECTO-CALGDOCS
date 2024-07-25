import { Sequelize } from "sequelize";
import UserModel from "../models/userModel.js";
import { logger } from "../config/logger.js";

export const getAllUsers = async (req, res) => {
  try {
    throw new Error('This is a test error'); // Forzar un error para probar el logging
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    logger.error(error.message, { stack: error.stack });
    res.json({ message: error.message });
  }
};




export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findAll({
            where: { id: req.params.id }
        })
        res.json(user[0])
    } catch (error) {
        res.json({ message: error.message })
    }
} 


export const createUser = async (req, res) => {
    try {
        await UserModel.create(req.body)
        res.json({ "message": "Registro creado exitosamente!"})
    } catch (error) {
        res.json({ message: error.message })
    }
}



export const updateUser = async (req, res) => {
    try {
        await UserModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": "!REGISTRO ACTUALIZADO EXITOSAMENTE¡" })
    } catch (error) {
        res.json({ message: error.message })
    }
}



export const deleteUser = async (req, res) => {
    try {
        await UserModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ "mesagge": "!REGISTRO BORRADO EXITOSAMENTE¡"})
    } catch (error) {
        res.json({ mesagge: error.mesagge })
    }
}


export const getQueryUser = async (req, res) => {

    try {
        const user = await UserModel.findAll({
            where: {
                documento: {
                    [Sequelize.Op.like]: `%${req.params.documento}%`
                }
            }
        })
        
        res.json(user)
    } catch (error) {
        res.json({ mesagge: error.mesagge })
    }
}