import React from 'react';
import { Container, Typography } from '@mui/material';

const HomePage = () => (
    <Container>
        <Typography variant="h3" gutterBottom>
            Credit Manager Home Page
        </Typography>
        <Typography variant="body1">
            Welcome to the Credit Manager application. Navigate to the Funcionario or Credito pages to manage data.
        </Typography>
    </Container>
);

export default HomePage;