import React, {useState} from 'react'
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material"

const SeatRadio = () => {
    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Тип місця</FormLabel>
            <RadioGroup row name="row-radio-buttons-group" value={value} onChange={handleChange}>
                <FormControlLabel value="Люкс" control={<Radio />} label="Люкс" />
                <FormControlLabel value="Купе" control={<Radio />} label="Купе" />
                <FormControlLabel value="Плацкарт" control={<Radio />} label="Плацкарт" />
            </RadioGroup>
        </FormControl>
    );
};

export default SeatRadio