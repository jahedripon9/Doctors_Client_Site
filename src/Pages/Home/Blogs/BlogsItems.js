import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BlogsItems = () => {
    return (
        <Container sx={{ my: 5 }} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: 'flex'}}>
                <Card sx={{ maxWidth: 345, marginRight: 5, background: '#81ecec'}} >
                    <CardActions  style={{ justifyContent: 'center' }} sx={{ my: 1 }}>
                        <img style={{ width: 60, marginLeft: '5px' }} src="https://i.ibb.co/47RGcw1/people-1.png" alt="" />
                        <Box>
                            <Typography sx={{ mx: 3,color: "black" }} variant='h6'>
                                Winson Herry
                            </Typography>
                            <Typography sx={{ color: 'gray', fontSize: '14px' }} variant='h6'>
                                23 June 2022
                            </Typography>
                        </Box>
                    </CardActions>
                    <CardContent style={{ textAlign:'left'}}>
                        <Typography sx={{ my: 1 }} style={{ fontWeight: 'bold', fontSize: '20px', spacing: 2, textAlign: 'justify' }} variant="body1" color="black">
                            2 Times of brush in a day can keep you healthy
                        </Typography>
                        <Typography sx={{ my: 3 }} style={{ spacing: 2, textAlign: 'justify' }} variant="body2" color="text.secondary">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis, qui accusamus sunt repudiandae totam.
                        </Typography>
                        <Button sx={{fontSize:'large'}} style={{  color: 'black', background:'white' }} variant=""><ArrowForwardIcon></ArrowForwardIcon></Button>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345, marginRight: 5 }} >
                    <CardActions style={{ justifyContent: 'center' }} sx={{ my: 1 }}>
                        <img style={{ width: 60, marginLeft: '5px' }} src="https://i.ibb.co/47RGcw1/people-1.png" alt="" />
                        <Box>
                            <Typography sx={{ mx: 3, color: "#1abc9c" }} variant='h6'>
                                Winson Herry
                            </Typography>
                            <Typography sx={{ color: 'gray', fontSize: '14px' }} variant='h6'>
                                23 June 2022
                            </Typography>
                        </Box>
                    </CardActions>
                    <CardContent style={{ textAlign:'left'}}>
                        <Typography sx={{ my: 1 }} style={{ fontWeight: 'bold', fontSize: '20px', spacing: 2, textAlign: 'justify' }} variant="body1" color="black">
                            2 Times of brush in a day can keep you healthy
                        </Typography>
                        <Typography sx={{ my: 3 }} style={{ spacing: 2, textAlign: 'justify' }} variant="body2" color="text.secondary">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis, qui accusamus sunt repudiandae totam.
                        </Typography>
                        <Button sx={{fontSize:'large'}} style={{  color: 'white', background:"#1abc9c" }} variant=""><ArrowForwardIcon></ArrowForwardIcon></Button>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }} >
                    <CardActions style={{ justifyContent: 'center' }} sx={{ my: 1 }}>
                        <img style={{ width: 60, marginLeft: '5px' }} src="https://i.ibb.co/47RGcw1/people-1.png" alt="" />
                        <Box>
                            <Typography sx={{ mx: 3, color: "#1abc9c" }} variant='h6'>
                                Winson Herry
                            </Typography>
                            <Typography sx={{ color: 'gray', fontSize: '14px' }} variant='h6'>
                                23 June 2022
                            </Typography>
                        </Box>
                    </CardActions>
                    <CardContent style={{ textAlign:'left'}}>
                        <Typography sx={{ my: 1 }} style={{ fontWeight: 'bold', fontSize: '20px', spacing: 2, textAlign: 'justify' }} variant="body1" color="black">
                            2 Times of brush in a day can keep you healthy
                        </Typography>
                        <Typography sx={{ my: 3 }} style={{ spacing: 2, textAlign: 'justify' }} variant="body2" color="text.secondary">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis, qui accusamus sunt repudiandae totam.
                        </Typography>
                        <Button sx={{fontSize:'large'}} style={{  color: 'white', background:"#1abc9c" }} variant=""><ArrowForwardIcon></ArrowForwardIcon></Button>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
};

export default BlogsItems;