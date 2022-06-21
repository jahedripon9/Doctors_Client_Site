import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Box, Grid } from '@mui/material';
const TestimonialCard = () => {
    return (
        <Container sx={{my:5}} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: 'flex' }}>
                <Card sx={{ maxWidth: 345, marginRight: 5 }} >
                    <CardContent>
                        <Typography sx={{my:3}} style={{spacing:2, textAlign:'justify'}} variant="body2" color="text.secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo fugit doloribus corporis, inventore voluptate corrupti eius repellat dicta voluptates ipsa suscipit odit vero laboriosam harum!
                        </Typography>

                    </CardContent>
                    <CardActions style={{justifyContent:'center'}} sx={{my:2}}>
                        <img style={{width:60, marginLeft:'5px'}} src="https://i.ibb.co/47RGcw1/people-1.png" alt="" />
                        <Box>
                            <Typography sx={{mx:3,color:"#1abc9c"}} variant='h6'>
                                Winson Herry
                            </Typography>
                            <Typography sx={{color:'gray', fontSize:'14px' }} variant='h6'>
                               California
                            </Typography>
                        </Box>
                    </CardActions>

                </Card>
                <Card sx={{ maxWidth: 345, marginRight: 5 }}>

                <CardContent>
                        <Typography sx={{my:3}} style={{spacing:2, textAlign:'justify'}} variant="body2" color="text.secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo fugit doloribus corporis, inventore voluptate corrupti eius repellat dicta voluptates ipsa suscipit odit vero laboriosam harum!
                        </Typography>

                    </CardContent>
                    <CardActions style={{justifyContent:'center'}} sx={{my:2}}> 
                        <img style={{width:60, marginLeft:'5px'}} src="https://i.ibb.co/47RGcw1/people-1.png" alt="" />
                        <Box>
                            <Typography sx={{mx:3,color:"#1abc9c"}} variant='h6'>
                                Herry
                            </Typography>
                            <Typography sx={{color:'gray', fontSize:'14px' }} variant='h6'>
                               California
                            </Typography>
                        </Box>
                    </CardActions>

                </Card>
                <Card sx={{ maxWidth: 345 }}>

                <CardContent>
                        <Typography sx={{my:3}} style={{spacing:2, textAlign:'justify'}} variant="body2" color="text.secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo fugit doloribus corporis, inventore voluptate corrupti eius repellat dicta voluptates ipsa suscipit odit vero laboriosam harum!
                        </Typography>

                    </CardContent>
                    <CardActions style={{justifyContent:'center'}} sx={{my:2}}>
                        <img style={{width:60, marginLeft:'5px'}} src="https://i.ibb.co/47RGcw1/people-1.png" alt="" />
                        <Box>
                            <Typography sx={{mx:3,color:"#1abc9c"}} variant='h6'>
                                Winson 
                            </Typography>
                            <Typography sx={{color:'gray', fontSize:'14px' }} variant='h6'>
                               California
                            </Typography>
                        </Box>
                    </CardActions>

                </Card>
            </Grid>
        </Container>
    );
};

export default TestimonialCard;