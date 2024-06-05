import React, { useState } from 'react';
import { createCliente } from '../../services/clienteService';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const AddCliente = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState(null);
    const [ocupacion, setOcupacion] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCliente = { nombre, apellido, direccion, telefono, fechaNacimiento, ocupacion };
        await createCliente(newCliente);
        navigate('/clientes');
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Nuevo cliente
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
                        label="Direccion"
                        fullWidth
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Telefono"
                        fullWidth
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        margin="normal"
                    />
                    <DatePicker
                        label="Fecha Nacimiento"
                        fullWidth
                        value={fechaNacimiento}
                        onChange={(date) => setFechaNacimiento(date)}
                        margin="normal"
                    />
                    <TextField
                        label="Ocupacion"
                        fullWidth
                        value={ocupacion}
                        onChange={(e) => setOcupacion(e.target.value)}
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Añadir
                    </Button>
                </form>
            </Container>
        </LocalizationProvider>
    );
};

export default AddCliente;