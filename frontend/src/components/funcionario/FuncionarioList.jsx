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
            <Typography variant="h4" gutterBottom>
                Funcionario List
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/funcionarios/add">
                Add Funcionario
            </Button>
            <TableContainer component={Paper} className="my-4">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Tipo Funcionario</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {funcionarios.map((funcionario) => (
                            <TableRow key={funcionario.funcionarioId}>
                                <TableCell>{funcionario.funcionarioId}</TableCell>
                                <TableCell>{funcionario.nombre}</TableCell>
                                <TableCell>{funcionario.apellido}</TableCell>
                                <TableCell>{funcionario.tipoFuncionario}</TableCell>
                                <TableCell>
                                    <IconButton
                                        component={Link}
                                        to={`/funcionarios/update/${funcionario.funcionarioId}`}
                                        color="primary"
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton
                                        color="secondary"
                                        onClick={() => handleDelete(funcionario.funcionarioId)}
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