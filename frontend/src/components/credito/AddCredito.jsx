import React, { useEffect, useState } from 'react';
import { createCredito } from '../../services/creditoService';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Autocomplete } from '@mui/material';
import { getClientes } from '../../services/clienteService';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const AddCredito = () => {
    const [clientes, setClientes] = useState([]);
    const [clienteId, setClienteId] = useState();
    const [razonCredito, setRazonCredito] = useState();
    const [montoSolicitado, setMontoSolicitado] = useState();
    const [fechaInicio, setFechaInicio] = useState();
    const [cuotas, setCuotas] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCredito = { 
            cliente: {
                id: clienteId
            }, 
            razonCredito, 
            montoSolicitado: Number(montoSolicitado), 
            fechaInicio, 
            cuotas: Number(cuotas), 
            aprobado: false 
        };
        await createCredito(newCredito);
        navigate('/creditos/pendientes');
    };

    useEffect(() => {
        const fetchClientes = async () => {
            const response = await getClientes();
            setClientes(response.data);
        };
    
        fetchClientes();
    }, []);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Nuevo crédito
                </Typography>
                <form onSubmit={handleSubmit}>    
                    <DatePicker
                            label="Fecha"
                            fullWidth
                            value={fechaInicio}
                            onChange={(date) => setFechaInicio(date)}
                            margin="normal"
                    />
                    <Autocomplete
                        id="clienteId"
                        options={clientes}
                        getOptionLabel={(option) => `${option.nombre} ${option.apellido}`}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Cliente" variant="outlined" margin="normal"/>}
                        onChange={(event, newValue) => {
                            setClienteId(newValue ? newValue.id : ''); 
                        }}
                    />
                    <TextField
                        label="Razon del crédito"
                        fullWidth
                        value={razonCredito}
                        onChange={(e) => setRazonCredito(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Monto solicitado"
                        inputProps={{ type: 'number'}}
                        fullWidth
                        value={montoSolicitado}
                        onChange={(e) => setMontoSolicitado(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Cuotas"
                        inputProps={{ type: 'number'}}
                        fullWidth
                        value={cuotas}
                        onChange={(e) => setCuotas(e.target.value)}
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

export default AddCredito;