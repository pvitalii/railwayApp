import {City, City2, Route, Train} from '../models/models'
import {Request, Response, NextFunction} from 'express'


export class trainController {
    async fetch(req: Request, res: Response) {
        const {from, to} = req.query
        const trains = await Train.findAll({
            include: [{
                model: Route,
                required: true,
                include: [{
                    model:City,
                    where:{name:from},
                },
                    {
                        model: City2,
                        where:{name2:to},
                    },
                ],
            }],
        })
        return res.json(trains)
    }
}