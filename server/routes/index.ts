import Router from "express"
import userRouter from "./userRouter"
import coachRouter from "./coachRouter"
import trainRouter from "./trainRouter"
import ticketRouter from "./ticketRouter"
import seatRouter from "./seatRouter"

const router = Router()

router.use('/user', userRouter)
router.use('/coach', coachRouter)
router.use('/train', trainRouter)
router.use('/ticket', ticketRouter)
router.use('/seat', seatRouter)

export default router