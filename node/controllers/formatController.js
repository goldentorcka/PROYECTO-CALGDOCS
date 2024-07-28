import { Sequelize } from "sequelize";
import FormatoModel from "../models/formatModel.js";
import logger from "../config/logger.js"; // Ajusta la importación del logger según tu configuración


export const getAllFormatos = async (req, res) => {
    try {
        // Obtener todos los formatos desde la base de datos
        const formatos = await FormatoModel.findAll();
        
        // Verificar si se encontraron formatos
        if (formatos.length > 0) {
            return res.status(200).json(formatos);
        } else {
            return res.status(404).json({ message: "No se encontraron formatos" });
        }
    } catch (error) {
        // Registrar el error
        logger.error('Error al obtener formatos:', { message: error.message, stack: error.stack });
        
        // Responder con un mensaje de error y código de estado 500 (Error interno del servidor)
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};


export const getFormato = async (req, res) => {
    try {
        // Buscar el formato con el ID proporcionado
        const formato = await FormatoModel.findOne({
            where: { id_formato: req.params.id }
        });

        // Verificar si se encontró el formato
        if (formato) {
            return res.status(200).json(formato);
        } else {
            return res.status(404).json({ message: "Formato no encontrado" });
        }
    } catch (error) {
        // Registrar el error
        logger.error('Error al obtener formato:', { message: error.message, stack: error.stack });
        
        // Responder con un mensaje de error y código de estado 500 (Error interno del servidor)
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};


export const createFormato = async (req, res) => {
    try {
        // Crear un nuevo registro en la base de datos
        await FormatoModel.create(req.body);
        
        // Responder con un mensaje de éxito y código de estado 201 (Creación exitosa)
        return res.status(201).json({ message: "Registro creado exitosamente!" });
    } catch (error) {
        // Registrar el error
        logger.error('Error al crear formato:', { message: error.message, stack: error.stack });
        
        // Responder con un mensaje de error y código de estado 500 (Error interno del servidor)
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};


export const updateFormato = async (req, res) => {
    try {
        // Actualizar el registro en la base de datos
        const [updated] = await FormatoModel.update(req.body, {
            where: { id_formato: req.params.id }
        });

        // Verificar si se actualizó algún registro
        if (updated) {
            return res.status(200).json({ message: "Registro actualizado exitosamente!" });
        } else {
            return res.status(404).json({ message: "Formato no encontrado" });
        }
    } catch (error) {
        // Registrar el error
        logger.error('Error al actualizar formato:', { message: error.message, stack: error.stack });

        // Responder con un mensaje de error y código de estado 500 (Error interno del servidor)
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};


export const deleteFormato = async (req, res) => {
    try {
        // Eliminar el registro en la base de datos
        const deleted = await FormatoModel.destroy({
            where: { id_formato: req.params.id }
        });

        // Verificar si se eliminó algún registro
        if (deleted) {
            return res.status(200).json({ message: "Registro borrado exitosamente!" });
        } else {
            return res.status(404).json({ message: "Formato no encontrado" });
        }
    } catch (error) {
        // Registrar el error
        logger.error('Error al borrar formato:', { message: error.message, stack: error.stack });

        // Responder con un mensaje de error y código de estado 500 (Error interno del servidor)
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};


export const getQueryFormato = async (req, res) => {
    try {
        // Extraer el parámetro de consulta 'cod_formato'
        const { cod_formato } = req.query;

        // Validar la presencia del parámetro 'cod_formato'
        if (!cod_formato) {
            return res.status(400).json({ message: "Parámetro 'cod_formato' es requerido" });
        }

        // Buscar formatos que coincidan con el parámetro de consulta
        const formatos = await FormatoModel.findAll({
            where: {
                cod_formato: {
                    [Op.like]: `%${cod_formato}%`
                }
            }
        });

        // Verificar si se encontraron formatos
        if (formatos.length > 0) {
            return res.status(200).json(formatos);
        } else {
            return res.status(404).json({ message: "No se encontraron formatos" });
        }
    } catch (error) {
        // Registrar el error
        logger.error('Error al obtener formatos:', { message: error.message, stack: error.stack });

        // Responder con un mensaje de error y código de estado 500 (Error interno del servidor)
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};
