import React, {useEffect, useState} from 'react'
import "../styles/Home.scss"
import {
    Autocomplete,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField
} from "@mui/material"
import DatePicker from "@mui/lab/DatePicker"
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import SeatRadio from "../components/SeatRadio"
import Direction from "../components/Direction"
import {Route, Routes} from "react-router-dom";
import Admin from "./Admin";
import {fetchTrain} from "../http/trainAPI";
import Trains from "../components/Train/Trains";
import changeDir from "../imgs/changeDir-btn.png";


const options = ['Київ', 'Харків', 'Львів', 'Одеса', 'Дніпро', 'Ужгород', 'Запоріжжя', 'Миколаїв', 'Маріуполь', 'Чернівці'];


const Home = () => {
    const [dateValue, setDateValue] = useState<Date | null>(null);
    const [trains, setTrains] = useState()

    //DIRECTION
    const [from, setFrom] = useState<string | null>('');
    const [inputFrom, setInputFrom] = useState('');
    const [to, setTo] = useState<string | null>('');
    const [inputTo, setInputTo] = useState('');
    const changeDirection = () => {
        const store = from
        setFrom(to)
        setTo(store)
    }
    //DIRECTION

    const search = async() => {
        const res = await fetchTrain(from!, to!);
        setTrains(res.data)
        window.scrollTo({
            top: 1000,
            behavior: "smooth"
        });
    }

    //SEATRADIO
    const [radioValue, setRadioValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue((event.target as HTMLInputElement).value);
    };
    //SEATRADIO

    return (
        <div>
            <div className="home">
                <div className="form-area">
                    Пошук потягу
                    {/*<Direction/>*/}
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
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Дата"
                            value={dateValue}
                            onChange={(newValue) => {
                                setDateValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            minDate={new Date()}
                        />
                    </LocalizationProvider>
                    {/*<SeatRadio/>*/}
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Тип місця</FormLabel>
                        <RadioGroup id="123" row name="row-radio-buttons-group" value={radioValue} onChange={handleChange}>
                            <FormControlLabel value="Люкс" control={<Radio />} label="Люкс" />
                            <FormControlLabel value="Купе" control={<Radio />} label="Купе" />
                            <FormControlLabel value="Плацкарт" control={<Radio />} label="Плацкарт" />
                        </RadioGroup>
                    </FormControl>
                    <Button variant="contained" sx={{width:300, fontSize:"18px", textTransform:"none"}} onClick={search}>Пошук</Button>
                </div>
            </div>
            <div className="search">
                {trains ?
                    <Trains trains={trains} type={radioValue} date={dateValue}/>
                    :
                    null
                }

            </div>
        </div>
    );
};

export default Home