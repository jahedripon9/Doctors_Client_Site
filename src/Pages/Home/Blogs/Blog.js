import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import BlogsItems from './BlogsItems';

const Blog = () => {
    return (
        <Container>
            <Box>
                <Typography sx={{ color: "#1abc9c", textAlign: 'center', fontWeight: 'bold', my: 2 }} variant='h6'>
                    Our Blog
                </Typography>
                <Typography style={{ textAlign: 'center', fontWeight: 'bold' }} variant='h4'>
                    From Our Blog News
                </Typography>
            </Box>
            <BlogsItems></BlogsItems>
        </Container>
    );
};

export default Blog;