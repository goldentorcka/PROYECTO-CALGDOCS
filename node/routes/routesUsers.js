import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser, getQueryUser } from "../controllers/userController.js";
const router = express.Router()

// router.get('/', getAllUsers)
router.get('/', async (req, res, next) => {
    try {
      await getAllUsers(req, res);
    } catch (error) {
      next(error);
    }
  });
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

router.get('/documento/:documento', getQueryUser)

export default router;