import React, {useEffect, useState} from 'react';
import "../../styles/Train.scss"
import {Button, Modal} from "@mui/material";
import {fetchCoach, fetchSeat} from "../../http/coachAPI";
import Coaches from "../Coach/Coaches";
import Seats from "../Seat/Seats";

const Train = (props:any) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const [coaches, setCoaches] = useState([]);

    // const getCoaches = async () => {
    //     const res = await fetchCoach(props.seatType, props.train.id);
    //     setCoaches(res.data);
    // }
    // getCoaches()
    // useEffect(() => {
    //     const getCoaches = async () => {
    //         const res = await fetchCoach(props.seatType, props.train.id);
    //         setCoaches(res.data);
    //     }
    //     getCoaches()
    // })
    useEffect(() => {
        let cleanupFunction = false
        const getCoaches = async () => {
            try {
                const res = await fetchCoach(props.seatType, props.train.id);
                if(!cleanupFunction) setCoaches(res.data)

            } catch (e) {
                console.error(e)
            }
        }
        getCoaches()
        return () => {
            cleanupFunction = true;
        }
    })



    return (
        <div className="train">
            <div className="train-main">
                <div style={{flex:1, fontSize:"24px"}}>
                    <p style={{fontSize:"18px"}}>Маршрут</p>
                    №{props.train.number} {props.train.route.city.name} → {props.train.route.city2.name2}
                </div>
                <div style={{fontSize:"24px"}}>
                    <p style={{fontSize:"18px"}}>Відправлення</p>
                    {props.train.departure}
                </div>
                <div style={{fontSize:"24px"}}>
                    <p style={{fontSize:"18px"}}>Прибуття</p>
                    {props.train.arrival}
                </div>
            </div>
            <Button variant="contained" sx={{width:300, fontSize:"18px", textTransform:"none", margin:"auto"}} onClick={handleOpen}>Вибрати</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{width:"855px", padding:"20px 50px", background:"white", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
                    <div style={{display:"flex", flexDirection:"column", rowGap:"30px"}}>
                        <span>Виберіть вагон:</span>
                        <Coaches selectedTrain={props.train.number} date={props.date} route={[props.train.route.city.name, props.train.route.city2.name2]} coaches={coaches} type={props.seatType}/>


                    </div>

                </div>
            </Modal>


        </div>

    );
};

export default Train;