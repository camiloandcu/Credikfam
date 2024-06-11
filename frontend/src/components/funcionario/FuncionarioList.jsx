import React, { useEffect, useState } from 'react';
import { getFuncionarios, deleteFuncionario } from '../../services/funcionarioService';
import { Link } from 'react-router-dom';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    IconButton,
    Typography,
    Box,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const FuncionarioList = () => {
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {
        fetchFuncionarios();
    }, []);

    const fetchFuncionarios = async () => {
        const response = await getFuncionarios();
        setFuncionarios(response.data);
    };

    const handleDelete = async (id) => {
        await deleteFuncionario(id);
        fetchFuncionarios();
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 2 }}> 
                <Typography variant="h4" gutterBottom>
                    Funcionarios
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/funcionarios/add">
                    Añadir funcionario
                </Button>
            </Box>
            <TableContainer component={Paper} className="my-4">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Tipo Funcionario</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {funcionarios.map((funcionario) => (
                            <TableRow key={funcionario.id}>
                                <TableCell>{funcionario.nombre}</TableCell>
                                <TableCell>{funcionario.apellido}</TableCell>
                                <TableCell>{funcionario.tipoFuncionario}</TableCell>
                                <TableCell>
                                    <IconButton
                                        component={Link}
                                        to={`/funcionarios/update/${funcionario.id}`}
                                        color="primary"
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton
                                        color="secondary"
                                        onClick={() => handleDelete(funcionario.id)}
                                    >
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default FuncionarioList;