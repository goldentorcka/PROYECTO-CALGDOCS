import { Sequelize } from "sequelize";
import { Op } from 'sequelize'; 
import UserModel from "../models/userModel.js";
import { logger } from "../config/logger.js";

export const getAllUsers = async (req, res) => {
    try {
        // Obtener todos los usuarios desde la base de datos  
        const users = await UserModel.findAll();

        // Verificar si se encontraron usuarios
        if (users.length === 0) {
            return res.status(404).json({ message: "No se encontraron usuarios" });
        }

        // Enviar los usuarios con código de estado 200
        res.status(200).json(users);
    } catch (error) {
        // Registrar el error
        logger.error(error.message, { stack: error.stack });
        
        // Responder con un mensaje de error y código de estado 500 (error del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const getUser = async (req, res) => {
    try {
        // Buscar el usuario por ID
        const user = await UserModel.findOne({
            where: { id: req.params.id }
        });

        // Validar si se encontró el usuario
        if (user === null) {
            // Responder con código de estado 404 y mensaje si no se encontró el usuario
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Si se encontró el usuario, responder con el usuario y código de estado 200
        res.status(200).json(user);
    } catch (error) {
        // Registrar el error en un archivo log
        logger.error(error.message, { stack: error.stack });
        
        // Responder con código de estado 500 y mensaje de error
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const createUser = async (req, res) => {
    try {
        // Validar los datos de entrada
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: "Datos de entrada inválidos" });
        }

        // Crear un nuevo usuario con los datos proporcionados
        const newUser = await UserModel.create(req.body);

        // Verificar si el usuario fue creado exitosamente
        if (!newUser) {
            return res.status(500).json({ message: "No se pudo crear el usuario" });
        }

        // Responder con un mensaje de éxito y código de estado 201 (Creación exitosa)
        res.status(201).json({ message: "Registro creado exitosamente!" });
    } catch (error) {
        // Registrar el error en un archivo log
        logger.error(error.message, { stack: error.stack });
        
        // Responder con un mensaje de error y código de estado 500 (Error interno del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
}




export const updateUser = async (req, res) => {
    try {
        // Validar los datos de entrada si es necesario
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: "Datos de entrada inválidos" });
        }

        // Actualizar el usuario con los datos proporcionados
        const [updated] = await UserModel.update(req.body, {
            where: { id: req.params.id }
        });

        // Verificar si se actualizó algún registro
        if (updated) {
            res.status(200).json({ message: "¡REGISTRO ACTUALIZADO EXITOSAMENTE!" });
        } else {
            res.status(404).json({ message: "Registro no encontrado" });
        }
    } catch (error) {
        // Registrar el error si es necesario
        logger.error(error.message, { stack: error.stack });
        
        // Responder con un mensaje de error y código de estado 500 (Error interno del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const deleteUser = async (req, res) => {
    try {
        // Eliminar el usuario con el ID proporcionado
        const deleted = await UserModel.destroy({
            where: { id: req.params.id }
        });

        // Verificar si se eliminó algún registro
        if (deleted) {
            // Responder con un mensaje de éxito y código de estado 200 (OK)
            res.status(200).json({ message: "¡REGISTRO BORRADO EXITOSAMENTE!" });
        } else {
            // Responder con un mensaje y código de estado 404 (No encontrado)
            res.status(404).json({ message: "Registro no encontrado" });
        }
    } catch (error) {
        // Registrar el error si es necesario
        logger.error(error.message, { stack: error.stack });
        
        // Responder con un mensaje de error y código de estado 500 (Error interno del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const getQueryUser = async (req, res) => {
    try {
        // Validar el parámetro de consulta
        const { documento } = req.query;

        if (!documento) {
            return res.status(400).json({ message: "Parámetro 'documento' es requerido" });
        }

        // Buscar usuarios que coincidan con el criterio de búsqueda
        const users = await UserModel.findAll({
            where: {
                documento: {
                    [Op.like]: `%${documento}%`
                }
            }
        });

        // Verificar si se encontraron usuarios
        if (users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: "No se encontraron registros" });
        }
    } catch (error) {
        // Registrar el error si es necesario
        logger.error(error.message, { stack: error.stack });
        
        // Responder con un mensaje de error y código de estado 500 (Error interno del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
}
