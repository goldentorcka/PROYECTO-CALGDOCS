import { Sequelize} from "sequelize";
import UnidadModel from "../models/unidadModel";

export const getAllUnidades = async (req, res) => {
    try {
        const unidades = await UnidadModel.findAll()
        res.json(unidades)
    } catch (error) {
        res.json({ message: error.message })
    }
}



export const getUnidad = async (req, res) => {
    try {
        const unidad = await UnidadModel.findAll({
            where: { id: req.params.id }
        })
        res.json(unidad[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}



export const createUnidad = async (req, res) => {
    try {
        await UnidadModel.create(req.body)
            res.json({ "message": "Registro creado exitosamente!" })
    } catch (error) {
        res.json({ message: error.message })
    }
}



export const updateUnidad = async (req, res) => {
    try {
        await UnidadModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": "!REGISTRO ACTUALIZADO EXITOSAMENTE��" })
    } catch (error) {
        res.json({ message: error.message })
    }
}



export const deleteUnidad = async (req, res) => {
    try {
        await UnidadModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ "message": "!REGISTRO ELIMINADO EXITOSAMENTE¡" })
    } catch (error) {
        res.json({ message: error.message })
    }
}



export const getQueryUnidad = async (req, res) => {
    try {
        const unidad = await UnidadModel.findAll({
            where: {
                //aca falta
            }
        })
        res.json(unidad)
    } catch (error) {
        
    }
}