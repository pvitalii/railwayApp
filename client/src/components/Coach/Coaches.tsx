import React, {useEffect, useState} from 'react';
import Coach from "./Coach";
import "../../styles/Coach.scss"
import Seats from "../Seat/Seats";
import {Button, Modal, TextField} from "@mui/material";
import {createSeat, deleteSeat, getSeatId} from "../../http/coachAPI";
import { v4 as uuidv4 } from 'uuid';
import {createTicket} from "../../http/userAPI";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE, MYTICKETS_ROUTE, RETURN_ROUTE} from "../../utils/consts";

interface Token {
    id:number,
    email:string,
    role:string
}

const Coaches = (props:any) => {
    const [reserve, setReserve] = useState()
    const click = async() => {
        await createSeat(reserve![3], reserve![0])
        setOpen(true);
    }

    const [open, setOpen] = useState(false);
    const handleClose = async() => {
        await deleteSeat(reserve![3], reserve![0])
        setOpen(false);
    }



    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');

    const navigate = useNavigate()




    const buyTicket = async () => {
        const user = jwt_decode<Token>(localStorage.getItem("token")!)
        const seatId = await getSeatId(reserve![0], reserve![3])
        await createTicket(name, surname, props.date.toISOString().slice(0, 19).replace('T', ' '), reserve![2], uuidv4(), user.id, seatId.data)
        navigate(MYTICKETS_ROUTE)
    }
    return (
        <div>
            <div className="coaches">
                {props.coaches.map((c:any) => (
                    <Coach coach={c} seatType={props.type} setReserve={setReserve}/>
                ))}
            </div>
            {reserve ?
                <div className="coaches-footer">
                    Вагон №{reserve[1]}, Місце №{reserve[3]}
                    <Button sx={{textTransform: "none", fontSize:"18px"}} variant="contained" onClick={click}>Забронювати</Button>
                </div>
                :
                null
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{width:"855px", padding:"20px 50px", background:"white", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
                    <div style={{display:"flex", flexDirection:"column", rowGap:"30px"}}>
                        <div className="ticket-header">
                            <button className="reserve-cancel" onClick={handleClose}>←</button>
                            <span>Оформити квиток</span>
                        </div>
                        <div className="ticket-main">
                            <div className="ticket-form">
                                <TextField
                                    id="outlined-name"
                                    label="Ім'я"
                                    value={name}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setName(event.target.value)}}
                                    // fullWidth
                                    sx={{width:300}}
                                    autoComplete="off"
                                />
                                <TextField
                                    id="outlined-name"
                                    label="Прізвище"
                                    value={surname}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setSurname(event.target.value)}}
                                    sx={{width:300}}
                                    autoComplete="off"
                                />
                                <TextField
                                    id="outlined-name"
                                    label="Номер карти"
                                    value="5169 3305 2002 8017"
                                    sx={{width:300}}
                                    autoComplete="off"
                                />
                                <TextField
                                    id="outlined-name"
                                    label="CVV2"
                                    value="123"
                                    sx={{width:300}}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="ticket-info">
                                <span>Потяг №{props.selectedTrain}</span>
                                <span>{reserve ? `Вагон №${reserve[1]}`: null}</span>
                                <span>{reserve ? `Місце №${reserve[3]}`: null}</span>
                                <span>{props.route[0]} → {props.route[1]}</span>
                                <span>{props.type}</span>
                                <span>Дата: {props.date.toLocaleDateString()}</span>
                            </div>
                            <div className="ticket-footer">
                                <span>{reserve ? `Ціна: ${reserve[2]} грн`: null}</span>
                                <Button sx={{textTransform:"none", fontSize:"18px"}} variant="contained" onClick={buyTicket}>Сплатити</Button>

                            </div>
                        </div>


                    </div>

                </div>
            </Modal>


        </div>
    );
};

export default Coaches;