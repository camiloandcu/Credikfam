import React, { useEffect, useState } from "react";
import { deleteCredito, getCreditosAprobados } from "../../services/creditoService";
import { Link } from "react-router-dom";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import LoadingPage from "../LoadingPage";
import dayjs from "dayjs";

const CreditoList = () => {
  const [creditos, setCreditos] = useState([]);

  useEffect(() => {
    fetchCreditos();
  }, []);

  const fetchCreditos = async () => {
    const response = await getCreditosAprobados();
    setCreditos(response.data);
  };

  const handleDelete = async (id) => {
    await deleteCredito(id);
    fetchCreditos();
  };

  if (!creditos) return <LoadingPage />;

  return (
    <Container>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 2}}>
        <Typography variant="h4" gutterBottom>
          Créditos aprobados
        </Typography>
      </Box>
      <TableContainer component={Paper} className="my-4">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Funcionario</TableCell>
              <TableCell>Razón del crédito</TableCell>
              <TableCell>Monto solicitado</TableCell>
              <TableCell>Cuotas</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {creditos.map((credito) => (
              <TableRow key={credito.id}>
                <TableCell>
                  {new dayjs(credito.fechaInicio).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell>
                  {credito.cliente.nombre} {credito.cliente.apellido}
                </TableCell>
                <TableCell>
                  {credito.funcionario.nombre} {credito.funcionario.apellido}
                </TableCell>
                <TableCell>{credito.razonCredito}</TableCell>
                <TableCell>{credito.montoSolicitado}</TableCell>
                <TableCell>{credito.cuotas}</TableCell>
                <TableCell>
                  <IconButton
                    component={Link}
                    to={`/creditos/update/${credito.id}`}
                    color="primary"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(credito.id)}
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

export default CreditoList;
