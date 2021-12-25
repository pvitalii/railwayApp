import {Coach, Seat} from '../models/models'
import {Request, Response, NextFunction} from 'express'

export class seatController {
    async fetch(req:Request, res:Response) {
        const {coach} = req.query
        const seats = await Seat.findAll({where:{coachId:coach}})
        return res.json(seats)
    }
    async getId(req:Request, res:Response) {
        const {coach, seatNum} = req.query
        const seat = await Seat.findOne({where:{coachId:coach, number:seatNum}})
        return res.json(seat!.id)
    }
    async create(req:Request, res:Response) {
        try {
            const {number, coach} = req.body
            await Seat.create({number: number, coachId: coach})
            res.json({message:"Місце заброньовано"})

        } catch (e) {
            res.json({message:"Помилка при бронюванні місця"})
        }
    }
    async delete(req:Request, res:Response) {
        try {
            const {number, coach} = req.query
            await Seat.destroy({where:{number: number, coachId: coach}})
            res.json({message:"Бронювання відмінено"})

        } catch (e) {
            res.json({message:"Помилка при відміні бронюванні місця"})
        }
    }
    async deleteById(req:Request, res:Response) {
        try {
            const {id} = req.query
            await Seat.destroy({where:{id: id}})
            res.json({message:"Бронювання відмінено"})

        } catch (e) {
            res.json({message:"Помилка при відміні бронюванні місця"})
        }
    }
}