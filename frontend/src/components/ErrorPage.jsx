import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                textAlign: 'center',
            }}
        >
            <Box sx={{ mb: 2 }}>
                <Home sx={{ fontSize: 80, color: 'error.main' }} />
            </Box>
            <Typography variant="h4" component="h1" gutterBottom>
                ¡Vaya! Página no encontrada
            </Typography>
            <Typography variant="body1" gutterBottom>
                La página que estás buscando no existe o ha ocurrido un error.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGoHome}
                startIcon={<Home />}
                sx={{ mt: 3 }}
            >
                Ir a Inicio
            </Button>
        </Container>
    );
};

export default ErrorPage;
