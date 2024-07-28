import { Sequelize } from "sequelize";
import responsibleModel from "../models/userModel.js";
import { logger } from "../config/logger.js";

export const getALLresponsible = async (req, res) => {
    try {
        // Obtener los responsables desde la base de datos
        const responsible = await UserModel.findAll({ where: { role: 'responsible' } });

        // Verificar si no hay responsables encontrados
        if (responsible.length === 0) {
            return res.status(404).json({ message: "No responsables encontrados" });
        }

        // Enviar la lista de responsables con código de estado 200
        res.status(200).json(responsible);
    } catch (error) {
        // Registrar el error con código de estado 500
        logger.error(error.message, { stack: error.stack });
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const getResponsible = async (req, res) => {
    try {
        // Buscar el responsable por ID 
        const responsible = await responsibleModel.findAll({
            where: { id: req.params.id }
        });

        // Verificar si se encontró al responsable
        if (responsible.length === 0) {
            return res.status(404).json({ message: "Responsable no encontrado" });
        }

        // Devolver el primer resultado con código de estado 200
        res.status(200).json(responsible[0]);
    } catch (error) {
        // Registrar el error y devolver un código de estado 500
        logger.error(error.message, { stack: error.stack });
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const createResponsible = async (req, res) => {
    try {
        // Crear un nuevo responsable con los datos proporcionados
        await responsibleModel.create(req.body);
        
        // Responder con un mensaje de éxito y código de estado 201 (creación exitosa)
        res.status(201).json({ message: "Responsable creado exitosamente!" });
    } catch (error) {
        // Registrar el error si es necesario
        logger.error(error.message, { stack: error.stack });
        
        // Responder con un mensaje de error y código de estado 500 (error del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const updateResponsible = async (req, res) => {
    try {
        // Actualizar el responsable con los datos proporcionados
        const [updatedRows] = await responsibleModel.update(req.body, {
            where: { id: req.params.id }
        });

        // Verificar si se actualizó algún registro
        if (updatedRows === 0) {
            return res.status(404).json({ message: "Responsable no encontrado" });
        }

        // Responder con un mensaje de éxito y código de estado 200 (actualización exitosa)
        res.status(200).json({ message: "¡Registro actualizado exitosamente!" });
    } catch (error) {
        // Registrar el error si es necesario
        logger.error(error.message, { stack: error.stack });
        
        // Responder con un mensaje de error y código de estado 500 (error del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const deleteResponsible = async (req, res) => {
    try {
        // Intentar eliminar el responsable
        const deletedRows = await responsibleModel.destroy({
            where: { id: req.params.id }
        });

        // Verificar si se eliminó algún registro
        if (deletedRows === 0) {
            return res.status(404).json({ message: "Responsable no encontrado" });
        }

        // Responder con un mensaje de éxito y código de estado 200 (eliminación exitosa)
        res.status(200).json({ message: "¡Registro eliminado exitosamente!" });
    } catch (error) {
        // Registrar el error si es necesario
        logger.error(error.message, { stack: error.stack });
        
        // Responder con un mensaje de error y código de estado 500 (error del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const getQueryResponsible = async (req, res) => {
    try {
        // Validar los parámetros de consulta
        const { filter, operator, value } = req.query;
        
        // Verificar si los parámetros necesarios están presentes
        if (!filter || !operator || !value) {
            return res.status(400).json({ message: "Parámetros de consulta inválidos" });
        }
        
        // Buscar responsables según los parámetros de consulta
        const responsible = await responsibleModel.findAll({
            where: {
                [filter]: {
                    [operator]: value
                }
            }
        });

        // Verificar si se encontraron resultados
        if (responsible.length === 0) {
            return res.status(404).json({ message: "No responsables encontrados" });
        }

        // Enviar los resultados con código de estado 200
        res.status(200).json(responsible);
    } catch (error) {
        // Registrar el error si es necesario
        logger.error(error.message, { stack: error.stack });
        
        // Responder con un mensaje de error y código de estado 500
        res.status(500).json({ message: "Error interno del servidor" });
    }
}