import Router from "express"
import {seatController} from "../controllers/seatController"

const router = Router()
const controller = new seatController()

router.get('/fetch', controller.fetch)
router.post('/create', controller.create)
router.delete('/delete', controller.delete)
router.get('/getId', controller.getId)

export default router