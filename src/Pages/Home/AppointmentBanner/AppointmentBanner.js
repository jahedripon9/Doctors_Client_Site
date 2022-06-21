import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${'https://i.ibb.co/N1DX6mK/appointment-bg.png'})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(45, 58, 74, 0.6)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 100,
    margin: 80



}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1, borderRadius:'20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{}}>
                    <img style={{ width: 400, marginTop: '-115px', marginBottom:'-4px' }} src="https://i.ibb.co/JxGK0H9/doctor.png" alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start',alignItems:'center' ,textAlign: 'left' }}>
                    <Box>
                        <Typography style={{ color: '#1abc9c' }} variant='h6'>
                            Appointment
                        </Typography>
                        <Typography style={{ color: 'white', fontWeight: 'bold', margin:'10px 0' }} variant='h3'>
                            Make an Appointment Today
                        </Typography>
                        <Typography style={{ color: '#bdc3c7', fontSize:'14px', margin:'10px 0'}} variant='h6' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi alias voluptate aspernatur doloribus accusantium fugit officia expedita eaque consectetur repellat.
                        </Typography>
                        <Button style={{ backgroundColor: '#1abc9c', color: 'white' }} variant="">Learn More</Button>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;