import React, { useEffect, useState } from 'react';
import { getCreditoById, updateCredito } from '../../services/creditoService';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, TextField, Button, Typography, Autocomplete } from '@mui/material';
import { getClientes } from '../../services/clienteService';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { getFuncionarios } from '../../services/funcionarioService';
import LoadingPage from '../LoadingPage';
import dayjs from 'dayjs';

const UpdateCredito = () => {
    const { id } = useParams();
    const [clientes, setClientes] = useState([]);
    const [funcionarios, setFuncionarios] = useState([]);
    const [credito, setCredito] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateCredito(parseInt(id), credito);
        navigate('/creditos/pendientes');
    };

    const fetchCredito = async (id) => {
        const response = await getCreditoById(parseInt(id));
        setCredito(response.data);
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
        fetchCredito(id);
        fetchFuncionarios();
        fetchClientes();
    }, [id]);

    if (!clientes || !funcionarios || !credito) return <LoadingPage />;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Actualizar crédito
                </Typography>
                <form onSubmit={handleSubmit}>    
                    <DatePicker
                        label="Fecha"
                        fullWidth
                        value={dayjs(credito.fechaInicio)}
                        onChange={(date) => setCredito({ ...credito, fechaInicio: date })}
                        margin="normal"
                    />
                    <Autocomplete
                        options={clientes}
                        defaultValue={credito.cliente}
                        getOptionLabel={(option) => `${option.nombre} ${option.apellido}`}
                        placeholder = {"The value that you want to set as preselected"}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Cliente" variant="outlined" margin="normal"/>}
                        onChange={(event, newValue) => {
                            setCredito({ ...credito, cliente: { id: newValue ? newValue.id : '' } }); 
                        }}
                    />
                    <Autocomplete
                        options={funcionarios}
                        defaultValue={credito.funcionario}
                        getOptionLabel={(option) => `${option.nombre} ${option.apellido}`}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Funcionario" variant="outlined" margin="normal"/>}
                        onChange={(event, newValue) => {
                            setCredito({ ...credito, funcionario: { id: newValue ? newValue.id : '' } }); 
                        }}
                    />
                    <TextField
                        label="Razon del crédito"
                        fullWidth
                        value={credito.razonCredito}
                        onChange={(e) => setCredito({ ...credito, razonCredito: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        label="Monto solicitado"
                        inputProps={{ type: 'number'}}
                        fullWidth
                        value={credito.montoSolicitado}
                        onChange={(e) => setCredito({ ...credito, montoSolicitado: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        label="Cuotas"
                        inputProps={{ type: 'number'}}
                        fullWidth
                        value={credito.cuotas}
                        onChange={(e) => setCredito({ ...credito, cuotas: e.target.value })}
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

export default UpdateCredito;