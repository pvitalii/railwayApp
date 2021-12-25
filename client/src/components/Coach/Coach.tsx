import React, {useEffect, useState} from 'react'
import "../../styles/Coach.scss"
import {Button} from "@mui/material";
import Seats from "../Seat/Seats";
import {fetchSeat} from "../../http/coachAPI";
import {Simulate} from "react-dom/test-utils";


const Coach = (props:any) => {
    const [value, setValue] = useState()
    const [open, setOpen] = useState(false)
    const setCoach = () => {
        setValue(props.coach)
        open ?
            setOpen(false)
            :
            setOpen(true)
    }
    return (
        <div className="single-coaches">
            <Button className="single-coach" variant="contained" onClick={setCoach}>
                №{props.coach.number}
            </Button>
            {open ?
                <Seats type={props.type} coach={value} setReserve={props.setReserve}/>
                :
                null
            }

        </div>
    );
};

export default Coach;