import { Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';

import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space } =booking
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (

        <>
        <Grid item xs={12} sm={12} md={4}>
            <Paper sx={{py:5}} elevation={3}>
                <Typography variant='h5' gutterBottom component="div">
                    {name}
                </Typography>
                    <Typography variant='h6' gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant='caption' display='block' gutterBottom component="div">
                    {space} Space Available
                </Typography>
                    <Button onClick={handleBookingOpen} style={{ backgroundColor: '#1abc9c', color: 'white' }} variant="">Booking Appointment</Button>
            </Paper>
        </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            >
            </BookingModal>
        </>

    );
};

export default Booking;