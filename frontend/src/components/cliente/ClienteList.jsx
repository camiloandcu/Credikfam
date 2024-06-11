import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, IconButton, TableBody } from '@mui/material';
import { deleteCliente, getClientes } from '../../services/clienteService';
import { Delete, Edit } from '@mui/icons-material';
import LoadingPage from '../LoadingPage';
import dayjs from 'dayjs';

const ClienteList = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetchClientes();
    }, []);

    const fetchClientes = async () => {
        const response = await getClientes();
        console.log(response.data)
        setClientes(response.data);
    };

    const handleDelete = async (id) => {
        await deleteCliente(id);
        fetchClientes();
    };

  if (!clientes) return <LoadingPage />;

    return (
        <Container>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 2}}>
                <Typography variant="h4" gutterBottom>
                    Clientes 
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/clientes/add"
                >
                    Añadir cliente
                </Button>
            </Box>
            <TableContainer component={Paper} className="my-4">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Direccion</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>Fecha Nacimiento</TableCell>
                            <TableCell>Ocupacion</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
            <TableBody>
                {clientes.map((cliente) => (
                <TableRow key={cliente.id}>
                    <TableCell>{cliente.nombre}</TableCell>
                    <TableCell>{cliente.apellido}</TableCell>
                    <TableCell>{cliente.direccion}</TableCell>
                    <TableCell>{cliente.telefono}</TableCell>
                    <TableCell>
                        {new dayjs(cliente.fechaNacimiento).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell>{cliente.ocupacion}</TableCell>
                    <TableCell>
                    <IconButton
                        component={Link}
                        to={`/clientes/update/${cliente.id}`}
                        color="primary"
                    >
                        <Edit />
                    </IconButton>
                    <IconButton
                        color="secondary"
                        onClick={() => handleDelete(cliente.id)}
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

export default ClienteList;