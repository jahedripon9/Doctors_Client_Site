import { Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';

import React from 'react';

const Booking = ({ booking }) => {
    const { name, time, space } =booking
    return (

        <Grid item xs={12} sm={12} md={4}>
            <Paper sx={{py:5}} elevation={3}>
                <Typography variant='h5' gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant='h5' gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant='caption' display='block' gutterBottom component="div">
                    {space} Space Available
                </Typography>
                <Button style={{ backgroundColor: '#1abc9c', color: 'white' }} variant="">Booking Appointment</Button>
            </Paper>
        </Grid>

    );
};

export default Booking;