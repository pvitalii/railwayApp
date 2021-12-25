import React, {useEffect, useState} from 'react';
import Train from "../Train/Train";
import Seat from "./Seat";
import "../../styles/Seat.scss"
import {fetchSeat} from "../../http/coachAPI";

const Seats = (props:any) => {
    const allSeats = Array.from({length: 36}, (_, i) => i + 1)
    const [seats, setSeats] = useState([]);
    useEffect(() => {
        let cleanupFunction = false
        const getTakenSeats = async () => {
            try {
                const res = await fetchSeat(props.coach.id)
                if(!cleanupFunction) setSeats(res.data)

            } catch (e) {
                console.error(e)
            }
        }
        getTakenSeats()
        return () => {
            cleanupFunction = true;
        }
    },[])


    return (
        <div>
            <div className="seats">
                {allSeats.map((s: any) => (
                    s % 2 === 0 ?
                    <div><Seat seat={s} seatType={props.type} taken={seats} selectedCoach={props.coach} setReserve={props.setReserve}/></div>
                        :
                        null
                ))}
                {allSeats.map((s: any) => (
                    s % 2 !== 0 ?
                        <div><Seat seat={s} seatType={props.type} taken={seats} selectedCoach={props.coach} setReserve={props.setReserve}/></div>
                        :
                        null
                ))}
            </div>
        </div>
    );
};

export default Seats;