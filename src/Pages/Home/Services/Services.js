import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius aliquid inventore in aliquam iure maiores voluptatibus voluptates similique, tempore sapiente?',
        img: <img src="https://i.ibb.co/Qkvg7mq/fluoride.png" alt="" srcset="" />

    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius aliquid inventore in aliquam iure maiores voluptatibus voluptates similique, tempore sapiente?',
        img: <img src="https://i.ibb.co/7G58dnY/cavity.png" alt="" srcset="" />
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius aliquid inventore in aliquam iure maiores voluptatibus voluptates similique, tempore sapiente?',
        img: <img src="https://i.ibb.co/rHGkDfR/whitening.png" alt="" srcset="" />
    }
]



const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container fixed>
            <Typography sx={{mt:5}} style={{color:"#1abc9c"}} variant="h6" component="div">
                        Our Services
                    </Typography>
            <Typography sx={{my:3}}  style={{fontWeight:'bold'}} variant="h4" component="div">
                        Sevices We Provide
                    </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;