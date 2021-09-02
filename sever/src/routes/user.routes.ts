import { Router } from "express"
import  { createUser, getUsers } from "../controller/user.controller"

const router = Router()

router.get('/users', getUsers)
router.post('/users', createUser)

export default router