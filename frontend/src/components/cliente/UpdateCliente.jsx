import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { getClienteById, updateCliente } from '../../services/clienteService';
import LoadingPage from '../LoadingPage';
import dayjs from 'dayjs';

const AddCliente = () => {
    const { id } = useParams();
    const [cliente, setCliente] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCliente(id);
    }, [id]);

    const fetchCliente = async (id) => {
        const response = await getClienteById(parseInt(id));
        setCliente(response.data);
        console.log(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateCliente(parseInt(id), cliente);
        navigate('/clientes');
    };

    if (!cliente) return <LoadingPage/>;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Actualizar cliente
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Nombre"
                        fullWidth
                        value={cliente.nombre}
                        onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        label="Apellido"
                        fullWidth
                        value={cliente.apellido}
                        onChange={(e) => setCliente({ ...cliente, apellido: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        label="Direccion"
                        fullWidth
                        value={cliente.direccion}
                        onChange={(e) => setCliente({ ...cliente, direccion: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        label="Telefono"
                        fullWidth
                        value={cliente.telefono}
                        onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })}
                        margin="normal"
                    />
                    <DatePicker
                        label="Fecha Nacimiento"
                        fullWidth
                        value={dayjs(cliente.fechaNacimiento)}
                        onChange={(date) => setCliente({ ...cliente, fechaNacimiento: date.target.value })}
                        margin="normal"
                    />
                    <TextField
                        label="Ocupacion"
                        fullWidth
                        value={cliente.ocupacion}
                        onChange={(e) => setCliente({ ...cliente, ocupacion: e.target.value })}
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Enviar
                    </Button>
                </form>
            </Container>
        </LocalizationProvider>
    );
};

export default AddCliente;