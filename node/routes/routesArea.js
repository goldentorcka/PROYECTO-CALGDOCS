import express from 'express';
import { createArea, deleteArea, getAllAreas, getArea, updateArea, getQueryArea } from "../controllers/areaController.js";

const router = express.Router()

router.get('/', getAllAreas)
router.get('/:id', getArea)
router.post('/', createArea)
router.put('/:id', updateArea)
router.delete('/:id', deleteArea)

router.get('/Tipo_De_Area/:Tipo_De_Area', getQueryArea)

export default router