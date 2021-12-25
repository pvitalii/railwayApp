import jwt_decode from "jwt-decode"
import {$host} from "./index"

export const registration = async (email:string, password:string) => {
    const {data} = await $host.post('api/user/registration', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email:string, password:string) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const createTicket = async (name:string, surname:string, date:string, price:number, UID:string, userId:number, seatId:number) => {
    await $host.post('api/ticket/reserve', {name, surname, date, price, UID, userId, seatId})
    return "Заброньовано"
}

export const getUsersTickets = async (user: number) => {
    return await $host.get('api/ticket/fetch-for-user', {params:{user}})
}

export const returnTicket = async (name:string, surname:string, UID:string) => {
    await $host.delete('api/ticket/return-ticket', {params:{name, surname, UID}})
}