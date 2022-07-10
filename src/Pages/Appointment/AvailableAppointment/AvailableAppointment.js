import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Booking from '../Booking/Booking';

const booking = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08:00 AM - 09:00 AM',
        space: 100,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09:00 AM - 10:00 AM',
        space: 120,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '09:30 AM - 11:00 AM',
        space: 110,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '03:00 PM - 05:00 PM',
        space: 140,
    },
    {
        id: 5,
        name: 'Padiatric Dental',
        time: '08:30 PM - 10:30 PM',
        space: 150,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '09:00 PM - 11:00 PM',
        space: 50,
    }
]

const AvailableAppointment = ({ date }) => {
    return (
        <Container sx={{ py: 3 }}>
            <Typography variant='h4' sx={{ py: 4 }} style={{ color: '#1abc9c', fontWeight: 'bold' }}>Available Appointment on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    booking.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }

            </Grid>
        </Container >
    );
};

export default AvailableAppointment;