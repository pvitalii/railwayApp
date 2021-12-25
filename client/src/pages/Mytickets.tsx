import React, {useEffect, useState} from 'react';
import {getUsersTickets} from "../http/userAPI";
import jwt_decode from "jwt-decode";
import UserTicket from "../components/UserTicket/UserTicket";
import Coach from "../components/Coach/Coach";
import {useLocation} from "react-router-dom";
import {MYTICKETS_ROUTE} from "../utils/consts";

interface Token {
    id:number,
    email:string,
    role:string
}
const Mytickets = () => {
    const [ticketsList, setTicketsList] = useState([])
    const location = useLocation()
    useEffect(() => {
        const getTickets = async () => {
            const user = jwt_decode<Token>(localStorage.getItem("token")!)
            const res = await getUsersTickets(user.id)
            setTicketsList(res.data)
        }
        if (location.pathname === MYTICKETS_ROUTE) getTickets()
    })

    return (
        <div>
            {ticketsList.map((t:any) => (
                <UserTicket ticket={t}/>
            ))}

        </div>
    );
};

export default Mytickets;