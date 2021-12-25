import Router from "express"
import {userController} from "../controllers/userController"
import AuthMiddleware from "../middleware/AuthMiddleware"

const router = Router()
const controller = new userController

router.post('/registration', controller.registration)
router.post('/login', controller.login)
// router.get('/auth', AuthMiddleware, controller.check)

export default router