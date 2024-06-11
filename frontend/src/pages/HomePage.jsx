import React from 'react';
import { Container, Typography, Button, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Container maxWidth="sm">
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        textAlign: 'center',
                        color: 'text.secondary',
                    }}
                >
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{ marginBottom: 2, color: 'primary.main' }}
                    >
                        Bienvenido al Gestor de Créditos
                    </Typography>
                    <Typography variant="body1">
                        Gestiona tus créditos con facilidad. Navega a las páginas de Funcionario o Crédito para comenzar.
                    </Typography>
                    <Link to="/funcionarios" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ marginTop: 2 }}
                            href="/funcionarios"
                        >
                            Empezar
                        </Button>
                    </Link>
                </Paper>
            </Container>
        </Box>
    );
};

export default HomePage;
