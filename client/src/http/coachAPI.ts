import {$host} from "./index"

export const fetchCoach = async (type:string, train:number) => {
    return await $host.get('api/coach/fetch', {params: {type, train}})
}


export const fetchSeat = async (coach:number) => {
    return await $host.get('api/seat/fetch', {params: {coach}})
}

export const getSeatId = async (coach:number, seatNum:number) => {
    return await $host.get('api/seat/getId', {params: {coach, seatNum}})
}

export const createSeat = async (number: number,coach:number) => {
    await $host.post('api/seat/create', {number, coach})
    return('Місце заброньовано')
}

export const deleteSeat = async (number: number, coach:number) => {
    await $host.delete('api/seat/delete', {params: {number, coach}})
    return('Бронювання відмінено')
}