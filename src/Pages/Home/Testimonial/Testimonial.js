import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    return (
        <Container>
            <Box>
                <Typography sx={{ color: "#1abc9c", textAlign: 'left', fontWeight: 'bold', my: 2 }} variant='h6'>
                    TESTIMONIAL
                </Typography>
                <Typography style={{ textAlign: 'left', fontWeight: 'bold' }} variant='h4'>
                    What's Our Patients <br /> Says
                </Typography>
            </Box>
            <TestimonialCard></TestimonialCard>
        </Container>
    );
};

export default Testimonial;