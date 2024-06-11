import React, { useEffect, useState } from 'react';
import { createCredito } from '../../services/creditoService';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Autocomplete } from '@mui/material';
import { getClientes } from '../../services/clienteService';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { getFuncionarios } from '../../services/funcionarioService';
import LoadingPage from '../LoadingPage';

const AddCredito = () => {
    const [clientes, setClientes] = useState([]);
    const [funcionarios, setFuncionarios] = useState([]);
    const [clienteId, setClienteId] = useState();
    const [funcionarioId, setFuncionarioId] = useState(); 
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
            funcionario: {
                id: funcionarioId
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

    const fetchClientes = async () => {
        const response = await getClientes();
        setClientes(response.data);
    };

    const fetchFuncionarios = async () => { 
        const response = await getFuncionarios();
        setFuncionarios(response.data);
    }

    useEffect(() => {
        fetchFuncionarios();
        fetchClientes();
    }, []);

    if (!clientes || !funcionarios) return <LoadingPage />;

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
                        options={clientes}
                        getOptionLabel={(option) => `${option.nombre} ${option.apellido}`}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Cliente" variant="outlined" margin="normal"/>}
                        onChange={(event, newValue) => {
                            setClienteId(newValue ? newValue.id : ''); 
                        }}
                    />
                    <Autocomplete
                        options={funcionarios}
                        getOptionLabel={(option) => `${option.nombre} ${option.apellido}`}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Funcionario" variant="outlined" margin="normal"/>}
                        onChange={(event, newValue) => {
                            setFuncionarioId(newValue ? newValue.id : ''); 
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