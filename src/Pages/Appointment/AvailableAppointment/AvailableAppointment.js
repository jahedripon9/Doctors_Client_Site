import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Booking from '../Booking/Booking';

const booking = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08:00 AM - 09:00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Teeth Orthodonics',
        time: '08:00 AM - 09:00 AM',
        space: 10,
    },
    {
        id: 3,
        name: 'Teeth Orthodonics',
        time: '08:00 AM - 09:00 AM',
        space: 10,
    },
    {
        id: 4,
        name: 'Teeth Orthodonics',
        time: '08:00 AM - 09:00 AM',
        space: 10,
    },
    {
        id: 5,
        name: 'Teeth Orthodonics',
        time: '08:00 AM - 09:00 AM',
        space: 10,
    },
    {
        id: 6,
        name: 'Teeth Orthodonics',
        time: '08:00 AM - 09:00 AM',
        space: 10,
    }
]

const AvailableAppointment = ({ date }) => {
    return (
        <Container>
            <Typography variant='h4' style={{ color: '#1abc9c' }}>Available Appointment on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    booking.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                    ></Booking>)
                }

            </Grid>
        </Container >
    );
};

export default AvailableAppointment;