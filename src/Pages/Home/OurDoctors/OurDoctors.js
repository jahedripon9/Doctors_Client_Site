import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import OurDoctor from './OurDoctor';

const doctors = [
    {
        name: 'Dr. Jahed Ahmed',
        call:  '+8801726308391',
        img: <img style={{width:'100%', height:'100%'}} src="https://i.ibb.co/sbj6Ms5/05.jpg" alt="" srcset="" />

    },
    {
        name: 'Dr. Khan',
        call: '+8801915443170',
        img: <img style={{width:'100%', height:'100%'}} src="https://i.ibb.co/Px6dSnw/06.jpg" alt="" srcset="" />
    },
    {
        name: 'Dr. Rahman',
        call: '+8801558745242',
        img: <img style={{width:'100%', height:'100%'}} src="https://i.ibb.co/2YVWdCm/02.jpg" alt="" srcset="" />
    }
]

const OurDoctors = () => {
    return (
        <Box sx={{ flexGrow: 1, marginBottom:3 }}>
        <Container fixed>
        <Typography sx={{marginBottom:4}} style={{color:"#1abc9c"}} variant="h6" component="div">
                    Our Doctors
                </Typography>
        
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    doctors.map(doctor => <OurDoctor
                        key={doctor.name}
                        doctor={doctor}
                    ></OurDoctor>)
                }
            </Grid>
        </Container>
    </Box>
    );
};

export default OurDoctors;