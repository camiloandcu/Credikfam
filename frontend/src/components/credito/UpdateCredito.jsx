import React, { useState, useEffect } from 'react';
import { getCreditoById, updateCredito } from '../../services/creditoService';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';

const UpdateCredito = () => {
    const { id } = useParams();
    const [credito, setCredito] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCredito(id);
    }, [id]);

    const fetchCredito = async (id) => {
        const response = await getCreditoById(parseInt(id));
        setCredito(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateCredito(parseInt(id), credito);
        navigate.push('/creditos');
    };

    if (!credito) return <div>Loading...</div>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Update Credito
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Cliente ID"
                    fullWidth
                    value={credito.clienteId}
                    onChange={(e) => setCredito({ ...credito, clienteId: e.target.value })}
                    margin="normal"
                />
                <TextField
                    label="Razon Credito"
                    fullWidth
                    value={credito.razonCredito}
                    onChange={(e) => setCredito({ ...credito, razonCredito: e.target.value })}
                    margin="normal"
                />
                <TextField
                    label="Monto Solicitado"
                    fullWidth
                    value={credito.montoSolicitado}
                    onChange={(e) => setCredito({ ...credito, montoSolicitado: e.target.value })}
                    margin="normal"
                />
                <TextField
                    label="Fecha Inicio"
                    fullWidth
                    value={credito.fechaInicio}
                    onChange={(e) => setCredito({ ...credito, fechaInicio: e.target.value })}
                    margin="normal"
                />
                <TextField
                    label="Cuotas"
                    fullWidth
                    value={credito.cuotas}
                    onChange={(e) => setCredito({ ...credito, cuotas: e.target.value })}
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit">
                    Update
                </Button>
            </form>
        </Container>
    );
};

export default UpdateCredito;
