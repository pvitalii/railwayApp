import React from 'react';
import "../../styles/Ticket.scss"

const UserTicket = (props:any) => {
    return (
        <div className="tickets">
            <div className="user-ticket">
                <div className="row">
                    <span>Прізвище, Ім'я: {props.ticket.surname} {props.ticket.name}</span>
                    <span>Маршрут: {props.ticket.seat.coach.train.route.city.name} → {props.ticket.seat.coach.train.route.city2.name2}</span>
                    <span>Дата: {new Date(props.ticket.date).toLocaleString([],{day: "numeric", month: "numeric", year: "numeric"})}</span>
                    <span>Ціна: {props.ticket.price}</span>
                </div>
                <div className="row">
                    <span>Тип місця: {props.ticket.seat.coach.seat_type.name}</span>
                    <span>Потяг: №{props.ticket.seat.coach.train.number}</span>
                    <span>Вагон: №{props.ticket.seat.coach.number}</span>
                    <span>Місце: №{props.ticket.seat.number}</span>
                </div>
                <div className="row third">
                    <span>Час відправлення: {props.ticket.seat.coach.train.departure.toLocaleString()}</span>
                    <span>Час прибуття: {props.ticket.seat.coach.train.arrival}</span>
                </div>
                <div className="uid">UID: {props.ticket.UID}</div>
                {/*<button className="uid">Повернути квиток</button>*/}
            </div>
        </div>
    );
};

export default UserTicket;