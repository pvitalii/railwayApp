import React, {useState} from 'react'
import "../styles/Home.scss"
import {Autocomplete, TextField} from "@mui/material";
import changeDir from "../imgs/changeDir-btn.png";

const options = ['Київ', 'Харків', 'Львів', 'Одеса', 'Дніпро', 'Ужгород', 'Запоріжжя', 'Миколаїв', 'Маріуполь', 'Чернівці'];

const Direction = () => {
    const [from, setFrom] = useState<string | null>('');
    const [inputFrom, setInputFrom] = useState('');
    const [to, setTo] = useState<string | null>('');
    const [inputTo, setInputTo] = useState('');
    const changeDirection = () => {
        const store = from
        setFrom(to)
        setTo(store)
    }
    return (
        <div className="direction">
            <Autocomplete
                value={from}
                onChange={(event: any, newValue: string | null) => {
                    setFrom(newValue);
                }}
                inputValue={inputFrom}
                onInputChange={(event, newInputValue) => {
                    setInputFrom(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Звідки" />}
            />
            <a onClick={changeDirection}><img src={changeDir} alt="change"/></a>
            <Autocomplete
                value={to}
                onChange={(event: any, newValue: string | null) => {
                    setTo(newValue);
                }}
                inputValue={inputTo}
                onInputChange={(event, newInputValue) => {
                    setInputTo(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Куди" />}
            />
        </div>
    )
}

export default Direction