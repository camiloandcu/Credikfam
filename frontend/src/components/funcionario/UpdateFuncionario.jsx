import React, { useState, useEffect } from 'react';
import { getFuncionarioById, updateFuncionario } from '../../services/funcionarioService';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import LoadingPage from '../LoadingPage';

const UpdateFuncionario = () => {
    const { id } = useParams();
    const [funcionario, setFuncionario] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchFuncionario(id);
    }, [id]);

    const fetchFuncionario = async (id) => {
        const response = await getFuncionarioById(parseInt(id));
        setFuncionario(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateFuncionario(parseInt(id), funcionario);
        navigate('/funcionarios');
    };

    if (!funcionario) return <LoadingPage/>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Actualizar funcionario
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nombre"
                    fullWidth
                    value={funcionario.nombre}
                    onChange={(e) => setFuncionario({ ...funcionario, nombre: e.target.value })}
                    margin="normal"
                />
                <TextField
                    label="Apellido"
                    fullWidth
                    value={funcionario.apellido}
                    onChange={(e) => setFuncionario({ ...funcionario, apellido: e.target.value })}
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="tipoFuncionario">Tipo Funcionario</InputLabel>
                    <Select
                        labelId="tipoFuncionario"
                        label="Tipo Funcionario"
                        value={funcionario.tipoFuncionario}
                        onChange={(e) => setFuncionario({...funcionario, tipoFuncionario: e.target.value})}
                    >
                        <MenuItem value="Asesor">Asesor</MenuItem>
                        <MenuItem value="Analista">Analista</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" type="submit">
                    Enviar
                </Button>
            </form>
        </Container>
    );
};

export default UpdateFuncionario;