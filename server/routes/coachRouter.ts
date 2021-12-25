import Router from "express"
import {coachController} from "../controllers/coachController"

const router = Router()
const controller = new coachController()

router.get('/fetch', controller.fetch)

export default router