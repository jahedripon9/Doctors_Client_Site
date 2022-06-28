import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
    backgroundPosition: 'center',
    // backgroundSize: 'cover',
    marginTop: 30,
    // margin: 80
    // width: 'full'
    
}

const verticalCenter = {
    display: 'flex',
    height: 400,
    alignItems: 'center',
    

}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant='h3' sx={{my:2, fontWeight: 500, }}>
                            Your New Smile <br /> Starts Here
                        </Typography>
                        <Typography sx={{my:2, fontSize: "16px", fontWeight: 300, color: 'gray' }} variant='h6'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Totam debitis placeat eius nemo reiciendis sit iste <br /> dolores iure, necessitatibus animi.
                        </Typography>
                        <Button style={{ backgroundColor: '#1abc9c' }} variant='contained'>
                            Get Appointment
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;