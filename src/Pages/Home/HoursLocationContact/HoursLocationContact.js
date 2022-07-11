import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';

const HoursLocationContact = () => {
    return (
        <Container style={{ marginTop: '-60px' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 4,
                        width: 300,
                        height: 80,
                    },
                }}

            >
                <Paper style={{ backgroundColor: '#1abc9c' }} sx={{ p: 1 }}>
                    <Grid container spacing={2} style={{ marginTop: '-20px', marginBottom: '1px', alignItems: 'center', color: 'white' }} sx={{ mx: 'auto' }}>
                        <Grid item xs={12} md={4} style={{}}>
                            <Box style={{ width: 55, textAlign: 'center' }} sx={{ my: 2 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h3' style={{ fontSize: '19px', fontWeight: 'bold' }}>
                                Opening Hours
                            </Typography>
                            <Typography variant='p' style={{ fontSize: '12px', fontWeight: 'bold' }}>
                                Lorem ipsum dolor sit amet consectetur.
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper style={{ backgroundColor: '#34495e' }} sx={{ p: 1 }}>
                    <Grid container spacing={2} style={{ marginTop: '-20px', marginBottom: '1px', alignItems: 'center', color: 'white' }} sx={{ mx: 'auto' }}>
                        <Grid item xs={12} md={4} style={{}}>
                            <Box style={{ width: 55, textAlign: 'center' }} sx={{ my: 2 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h6' style={{ fontSize: '17px', fontWeight: 'bold' }}>
                                Visit our Location
                            </Typography>
                            <Typography variant='p' style={{ fontSize: '12px', fontWeight: 'bold' }}>
                                121 Sylhet, Bangladesh
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper style={{ backgroundColor: '#1abc9c' }} sx={{ p: 1 }}>
                    <Grid container spacing={2} style={{ marginTop: '-20px', marginBottom: '1px', alignItems: 'center', color: 'white' }} sx={{ mx: 'auto' }}>
                        <Grid item xs={12} md={4} style={{}}>
                            <Box style={{ width: 50, textAlign: 'center' }} sx={{ my: 2 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                </svg>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h6' style={{ fontSize: '17px', fontWeight: 'bold' }}>
                                Contact us now 
                            </Typography>
                            <Typography variant='p' style={{ fontSize: '12px', fontWeight: 'bold' }}>
                                +88 01726 30 83 91
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>

            </Box>
        </Container>
    );
};

export default HoursLocationContact;