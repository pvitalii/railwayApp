import {User} from '../models/models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {Request, Response, NextFunction} from 'express'
import {ApiError} from "../error/ApiError"

interface userRequest extends Request {
    user: {
        id: number,
        email: string,
        role: string
    }
}

const generateJwt = (id:number, email:string, role:string) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY!,
        {expiresIn: '24h'}
    )
}

export class userController {
    async registration(req:Request, res:Response, next:NextFunction) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req:Request, res:Response, next:NextFunction) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req:userRequest, res:Response, next:NextFunction) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}