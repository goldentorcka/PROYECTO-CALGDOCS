import express from 'express';
import { createUnidad, deleteUnidad, getAllUnidades, getUnidad, updateUnidad, getQueryUnidad } from '../controllers/unidadController.js'

const router = express.Router()
router.get('/', getAllUnidades)
router.get('/:id', getUnidad)
router.post('/', createUnidad)
router.put('/:id', updateUnidad)
router.delete('/:id', deleteUnidad)

router.get('/nombre/:nombre', getQueryUnidad)

export default router