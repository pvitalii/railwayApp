import {City, City2, Coach, Route, Seat, Seat_type, Ticket, Train} from '../models/models'
import {Request, Response, NextFunction} from 'express'


export class ticketController {
    async reserve(req:Request, res:Response) {
        const {name, surname, date, price, UID, userId, seatId} = req.body
        const ticket = await Ticket.create({name, surname, date, price, UID, userId, seatId})
        return res.json(ticket)

    }
    async returnTicket(req:Request, res:Response) {
        const {name, surname, UID} = req.query
        await Ticket.destroy({where:{name: name, surname: surname, UID: UID}})
        res.json({message:"Квиток повернено"})
    }

    async fetchForUser(req:Request, res:Response) {
        const {user} = req.query
        const ticket = await Ticket.findAll({where:{userId:user},
            include: [{
                model:Seat,
                include: [{
                    model:Coach,
                    include: [{
                        model:Seat_type,
                    },
                        {
                            model:Train,
                            include: [{
                                model:Route,
                                include: [{
                                    model:City
                                },
                                    {
                                        model:City2
                                    }
                                ]
                            }]
                        }
                    ]
                }]
            }]})
        return res.json(ticket)

    }



}