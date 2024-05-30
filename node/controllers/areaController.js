import { Sequelize } from "sequelize";
import AreaModel from "../models/areaModel.js";

export const getAllAreas = async (req, res) => {
    try {
        const areas = await AreaModel.findAll()
        res.json(areas)
    } catch (error) {
        res.json({ message: error.message })
    }
}



export const getArea = async (req, res) => {
    try {
        const area = await AreaModel.findAll({
            where: { id: req.params.id }
        })
        res.json(area[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}




export const createArea = async (req, res) => {
    try {
        await AreaModel.create(req, res)
            res.json({ "message": "Registro creado exitosamente!" })
    } catch (error) {
        res.json({ message: error.message })
    }
}





export const updateArea = async (req, res) => {
    try {
        await AreaModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": "Registro actualizado exitosamente!" })
    } catch (error) {
        res.json({ message: error.message })
    }
}




export const deleteArea = async (req, res) => {
    try {
        await AreaModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ "message": "Registro eliminado exitosamente!" })
    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getQueryArea = async (req, res) => {
    try {
        const area = await AreaModel.findAll({
            where: {
                nombre: {
                    [Sequelize.Op.like]: `%${req.params.nombre}%`
                }
            }
        })
        
        res.json(area)
    } catch (error) {
        res.json({ mesagge: error.mesagge })
    }
}