import express from "express";
import { createFormato, deleteFormato, getAllFormatos, getFormato, updateFormato, getQueryFormato } from "../controllers/formatController.js";
const router = express.Router();

router.get('/', getAllFormatos);
router.get('/:id', getFormato);
router.post('/', createFormato);
router.put('/:id', updateFormato);
router.delete('/:id', deleteFormato);


router.get('/nombre/:nom_formato', getQueryFormato);

export default router;
