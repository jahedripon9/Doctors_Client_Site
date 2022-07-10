import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const Calander = ({date, setDate}) => {
    
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                orientation="landscape"
                openTo="day"
                value={date}
                shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                
            />
        </LocalizationProvider>
    );
};

export default Calander;