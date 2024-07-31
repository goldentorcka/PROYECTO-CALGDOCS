import { Sequelize } from "sequelize";
import AreaModel from "../models/areaModel.js";
import { logger } from "../config/logger.js";

export const getAllAreas = async (req, res) => {
    try {
        const areas = await AreaModel.findAll();
        res.status(200).json({
            message: "Todas las áreas recuperadas exitosamente.",
            data: areas
        }); // 200 OK
    } catch (error) {
        logger.error('Error al recuperar las áreas', { message: error.message, stack: error.stack });
        res.status(500).json({
            message: "Error al recuperar las áreas.",
            error: error.message
        }); // 500 Internal Server Error
    }
};

export const getArea = async (req, res) => {
    try {
        const area = await AreaModel.findAll({
            where: { id: req.params.id }
        });
        if (area.length > 0) {
            res.status(200).json({
                message: "Área recuperada exitosamente.",
                data: area[0]
            }); // 200 OK
        } else {
            res.status(404).json({
                message: "Área no encontrada."
            }); // 404 Not Found
        }
    } catch (error) {
        logger.error('Error al recuperar el área', { message: error.message, stack: error.stack });
        res.status(500).json({
            message: "Error al recuperar el área.",
            error: error.message
        }); // 500 Internal Server Error
    }
};

export const createArea = async (req, res) => {
    try {
        await AreaModel.create(req.body);
        res.status(201).json({
            message: "Área creada exitosamente."
        }); // 201 Created
    } catch (error) {
        logger.error('Error al crear el área', { message: error.message, stack: error.stack });
        res.status(500).json({
            message: "Error al crear el área.",
            error: error.message
        }); // 500 Internal Server Error
    }
};

export const updateArea = async (req, res) => {
    try {
        const result = await AreaModel.update(req.body, {
            where: { id: req.params.id }
        });
        if (result[0] > 0) {
            res.status(200).json({
                message: "Área actualizada exitosamente."
            }); // 200 OK
        } else {
            res.status(404).json({
                message: "Área no encontrada."
            }); // 404 Not Found
        }
    } catch (error) {
        logger.error('Error al actualizar el área', { message: error.message, stack: error.stack });
        res.status(500).json({
            message: "Error al actualizar el área.",
            error: error.message
        }); // 500 Internal Server Error
    }
};

export const deleteArea = async (req, res) => {
    try {
        const result = await AreaModel.destroy({
            where: { id: req.params.id }
        });
        if (result > 0) {
            res.status(200).json({
                message: "Área eliminada exitosamente."
            }); // 200 OK
        } else {
            res.status(404).json({
                message: "Área no encontrada."
            }); // 404 Not Found
        }
    } catch (error) {
        logger.error('Error al eliminar el área', { message: error.message, stack: error.stack });
        res.status(500).json({
            message: "Error al eliminar el área.",
            error: error.message
        }); // 500 Internal Server Error
    }
};

export const getQueryArea = async (req, res) => {
    try {
        const areas = await AreaModel.findAll({
            where: {
                nombre: {
                    [Sequelize.Op.like]: `%${req.params.nombre}%`
                }
            }
        });
        res.status(200).json({
            message: "Áreas recuperadas exitosamente.",
            data: areas
        }); // 200 OK
    } catch (error) {
        logger.error('Error al recuperar las áreas', { message: error.message, stack: error.stack });
        res.status(500).json({
            message: "Error al recuperar las áreas.",
            error: error.message
        }); // 500 Internal Server Error
    }
};
