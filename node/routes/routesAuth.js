import express from 'express'
import { createUser } from '../controllers/userController'

const router = express.Router
router.pos('/', createUser)

export default router  