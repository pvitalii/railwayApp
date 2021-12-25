import Router from "express"
import {ticketController} from "../controllers/ticketController"

const router = Router()
const controller = new ticketController()

router.post('/reserve', controller.reserve)
router.delete('/return-ticket', controller.returnTicket)
router.get('/fetch-for-user', controller.fetchForUser)

export default router