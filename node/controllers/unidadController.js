import { Sequelize} from "sequelize";
import UnidadModel from "../models/unidadModel";
import logger from "../config/logger.js";


export const getAllUnidades = async (req, res) => {
    try {
        // Obtener todas las unidades de la base de datos
        const unidades = await UnidadModel.findAll();
        
        // Responder con las unidades y un código de estado 200 (OK)
        res.status(200).json(unidades);
    } catch (error) {
        // Registrar el error
        logger.error('Error al obtener unidades:', { message: error.message, stack: error.stack });
        
        // Responder con un mensaje de error y un código de estado 500 (Error interno del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


export const getUnidad = async (req, res) => {
    try {
        // Obtener la unidad de la base de datos
        const unidad = await UnidadModel.findOne({
            where: { id: req.params.id }
        });

        // Verificar si la unidad fue encontrada
        if (unidad) {
            // Responder con la unidad y un código de estado 200 (OK)
            res.status(200).json(unidad);
        } else {
            // Responder con un mensaje de no encontrado y un código de estado 404 (Not Found)
            res.status(404).json({ message: "Unidad no encontrada" });
        }
    } catch (error) {
        // Registrar el error
        logger.error('Error al obtener unidad:', { message: error.message, stack: error.stack });

        // Responder con un mensaje de error y un código de estado 500 (Error interno del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


export const createUnidad = async (req, res) => {
    try {
        // Crear una nueva unidad en la base de datos
        await UnidadModel.create(req.body);
        
        // Responder con un mensaje de éxito y un código de estado 201 (Creado)
        res.status(201).json({ message: "Registro creado exitosamente!" });
    } catch (error) {
        // Registrar el error
        logger.error('Error al crear unidad:', { message: error.message, stack: error.stack });

        // Responder con un mensaje de error y un código de estado 500 (Error interno del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


export const updateUnidad = async (req, res) => {
    try {
        // Actualizar la unidad en la base de datos
        const [updated] = await UnidadModel.update(req.body, {
            where: { id: req.params.id }
        });

        // Verificar si la unidad fue actualizada
        if (updated) {
            // Responder con un mensaje de éxito y un código de estado 200 (OK)
            res.status(200).json({ message: "¡REGISTRO ACTUALIZADO EXITOSAMENTE!" });
        } else {
            // Responder con un mensaje de no encontrado y un código de estado 404 (Not Found)
            res.status(404).json({ message: "Registro no encontrado" });
        }
    } catch (error) {
        // Registrar el error
        logger.error('Error al actualizar unidad:', { message: error.message, stack: error.stack });

        // Responder con un mensaje de error y un código de estado 500 (Error interno del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


export const deleteUnidad = async (req, res) => {
    try {
        // Eliminar la unidad de la base de datos
        const deleted = await UnidadModel.destroy({
            where: { id: req.params.id }
        });

        // Verificar si la unidad fue eliminada
        if (deleted) {
            // Responder con un mensaje de éxito y un código de estado 200 (OK)
            res.status(200).json({ message: "¡REGISTRO ELIMINADO EXITOSAMENTE!" });
        } else {
            // Responder con un mensaje de no encontrado y un código de estado 404 (Not Found)
            res.status(404).json({ message: "Registro no encontrado" });
        }
    } catch (error) {
        // Registrar el error
        logger.error('Error al eliminar unidad:', { message: error.message, stack: error.stack });

        // Responder con un mensaje de error y un código de estado 500 (Error interno del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


export const getQueryUnidad = async (req, res) => {
    try {
        const unidades = await UnidadModel.findAll({
            where: {
                nombre: {
                    [Sequelize.Op.like]: `%${req.params.nombre}%`
                }
            }
        });

        if (unidades.length > 0) {
            // Responder con las unidades encontradas y un código de estado 200 (OK)
            res.status(200).json(unidades);
        } else {
            // Responder con un mensaje de no encontrado y un código de estado 404 (Not Found)
            res.status(404).json({ message: "No se encontraron unidades" });
        }
    } catch (error) {
        // Registrar el error
        logger.error('Error al obtener unidades:', { message: error.message, stack: error.stack });

        // Responder con un mensaje de error y un código de estado 500 (Error interno del servidor)
        res.status(500).json({ message: "Error interno del servidor" });
    }
};