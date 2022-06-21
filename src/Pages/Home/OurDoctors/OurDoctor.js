import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';



const OurDoctor = (props) => {
    const { name, call, img } = props.doctor;
    return (
        <Grid item xs={10} sm={6} md={4}>
        
            <Card sx={{ minWidth: 275, border:0, boxShadow:2 }}>
                <CardContent>
                <Typography  color="text.secondary" gutterBottom>
                        {img}
                    </Typography>
                    <Typography style={{fontWeight:'bold', margin:"10px 0"}} variant="h5" component="div">
                        {name}
                    </Typography>
                    <AddIcCallRoundedIcon style={{ color:'#1abc9c',   marginRight:5, }}></AddIcCallRoundedIcon> 
                    <Typography sx={{ }} color="text.secondary">
                     {call}
                    </Typography>
                    
                </CardContent>
                
            </Card>
        </Grid>
    );
};

export default OurDoctor;