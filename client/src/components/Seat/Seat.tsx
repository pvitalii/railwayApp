import React, {useState} from 'react';
import {Button} from "@mui/material";


const Seat = (props:any) => {
    const takenSeats = props.taken.map((seat:any) => {
        return parseInt(seat.number)
    })
    const temporaryReserve = (coachId:number,coachNumber:number, coachPrice:number, seat:number) => {
        return [coachId, coachNumber, coachPrice, seat]
    }
    return (
        <div>
            {takenSeats.includes(props.seat) ?
                <div>
                    <div className="disabled-seat">
                        {props.seat}
                    </div>
                </div>
                :
                <button id="seat-btn" className="single-seat" onFocus={() => props.setReserve(temporaryReserve(props.selectedCoach.id,props.selectedCoach.number, props.selectedCoach.price, props.seat))}>
                    {props.seat}
                </button>
            }
        </div>

    );
};

export default Seat;