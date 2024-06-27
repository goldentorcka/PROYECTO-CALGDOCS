import { Sequelize } from "sequelize";
import FormatoModel from "../models/formatModel.js";

// Obtener todos los formatos
export const getAllFormatos = async (req, res) => {
    try {
        const formatos = await FormatoModel.findAll();
        res.json(formatos);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener un formato por ID
export const getFormato = async (req, res) => {
    try {
        const formato = await FormatoModel.findAll({
            where: { id_formato: req.params.id }
        });
        res.json(formato[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un nuevo formato
export const createFormato = async (req, res) => {
    try {
        await FormatoModel.create(req.body);
        res.json({ message: "Registro creado exitosamente!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un formato existente
export const updateFormato = async (req, res) => {
    try {
        await FormatoModel.update(req.body, {
            where: { id_formato: req.params.id }
        });
        res.json({ message: "Registro actualizado exitosamente!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Borrar un formato
export const deleteFormato = async (req, res) => {
    try {
        await FormatoModel.destroy({
            where: { id_formato: req.params.id }
        });
        res.json({ message: "Registro borrado exitosamente!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Buscar formatos por código
export const getQueryFormato = async (req, res) => {
    try {
        const formatos = await FormatoModel.findAll({
            where: {
                cod_formato: {
                    [Sequelize.Op.like]: `%${req.params.cod_formato}%`
                }
            }
        });
        res.json(formatos);
    } catch (error) {
        res.json({ message: error.message });
    }
};
