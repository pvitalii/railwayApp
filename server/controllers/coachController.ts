import {Coach, Seat_type, Train} from '../models/models'
import {Request, Response, NextFunction} from 'express'

export class coachController {
    async fetch(req:Request, res:Response) {
        const {type, train} = req.query
        const coaches = await Coach.findAll({
            include: [{
                model: Train,
                where: {id:train}
            },
                {
                    model: Seat_type,
                    where: {name:type}
                }
            ]
        })
        return res.json(coaches)
    }
}