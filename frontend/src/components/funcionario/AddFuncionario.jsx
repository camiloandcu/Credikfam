import React, { useState } from 'react';
import { createFuncionario } from '../../services/funcionarioService';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';

const AddFuncionario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [tipoFuncionario, setTipoFuncionario] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newFuncionario = { nombre, apellido, tipoFuncionario };
        await createFuncionario(newFuncionario);
        navigate('/funcionarios');
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Add Funcionario
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nombre"
                    fullWidth
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Apellido"
                    fullWidth
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Tipo Funcionario"
                    fullWidth
                    value={tipoFuncionario}
                    onChange={(e) => setTipoFuncionario(e.target.value)}
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit">
                    Add
                </Button>
            </form>
        </Container>
    );
};

export default AddFuncionario;