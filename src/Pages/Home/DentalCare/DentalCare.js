import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import DantalCare from '../../../images/treatment.png'

const DentalCare = () => {
    return (
        <Box sx={{ flexGrow: 1, borderRadius: '20px', paddingBottom:'5%', paddingTop:'5%'}}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={5}>
                    <img style={{ width: 400, borderRadius: '15px', maxWidth: 350 }} src={DantalCare} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
                    <Box style={{ margin: '3%' }}>

                        <Typography style={{ fontWeight: 'bold' }} variant='h3'>
                            Exceptional Dental Care, <br /> on Your Terms
                        </Typography>
                        <Typography style={{ color: '#bdc3c7', fontSize: '16px', lineHeight: '1.8', paddingTop: '4%', paddingBottom:'4%', textAlign:'justify' }} variant='h5' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel facilis, ipsam quod est minus cumque suscipit libero aperiam eveniet dolorum quisquam explicabo rem a impedit. Ullam eligendi dolorum, ab quasi natus itaque vel harum animi. Velit numquam nulla, voluptates ratione eligendi corrupti. Veniam odit provident voluptatum assumenda velit nihil totam aut dolorum nostrum tenetur alias molestias sint et, similique quaerat suscipit magnam soluta corrupti. Earum minus ratione incidunt enim ducimus possimus maiores laudantium nam iusto
                        </Typography>
                        <Button style={{ backgroundColor: '#1abc9c', color: 'white' }} variant="">Learn More</Button>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
};

export default DentalCare;