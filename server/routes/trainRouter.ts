import Router from "express"
import {trainController} from "../controllers/trainControler"

const router = Router()
const controller = new trainController()

router.get('/fetch', controller.fetch)

export default router