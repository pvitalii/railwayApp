import jwt, {JwtPayload} from "jsonwebtoken"
import {Request, Response, NextFunction} from "express"

interface userRequest extends Request {
    user: string | JwtPayload
}


 function AuthMiddleware(req:userRequest, res:Response, next:NextFunction) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization!.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        req.user = jwt.verify(token, process.env.SECRET_KEY!)
        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизован"})
    }
}

export default AuthMiddleware
