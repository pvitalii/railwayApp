import React, {useState} from 'react'
import "../styles/Return.scss"
import {Button, TextField} from "@mui/material";
import {returnTicket} from "../http/userAPI";

const Return = () => {
    const[UID, setUID] = useState('')
    const[name, setName] = useState('')
    const[surname, setSurname] = useState('')
    const click = async() => {
        await returnTicket(name, surname, UID)
    }

    return (
        <div className="return">
            <div className="return-area">
                Повернення квитків
                <div className="return-form">
                    <TextField
                        id="outlined-multiline-flexible"
                        label="UID"
                        value={UID}
                        onChange={(e) => setUID(e.target.value)}
                        fullWidth
                        autoComplete="off"
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Ім'я"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        autoComplete="off"
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Прізвище"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        fullWidth
                        autoComplete="off"
                    />
                </div>
                <Button variant="contained" onClick={click}>Повернути квиток</Button>



            </div>

        </div>
    );
};

export default Return