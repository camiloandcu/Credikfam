import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const HomePage = lazy(() => import('./pages/HomePage'));

const ClientesPage = lazy(() => import('./pages/ClientesPage'));
const AddCliente = lazy(() => import('./components/cliente/AddCliente'));
const UpdateCliente = lazy(() => import('./components/cliente/UpdateCliente'));

const CreditosAprobadosPage = lazy(() => import('./pages/CreditosAprobadosPage')); 
const CreditosPendientesPage = lazy(() => import('./pages/CreditosPendientesPage'));
const AddCredito = lazy(() => import('./components/credito/AddCredito'));
const UpdateCredito = lazy(() => import('./components/credito/UpdateCredito'));

const FuncionariosPage = lazy(() => import('./pages/FuncionariosPage'));
const AddFuncionario = lazy(() => import('./components/funcionario/AddFuncionario'));
const UpdateFuncionario = lazy(() => import('./components/funcionario/UpdateFuncionario'));

const AppRoutes = () => (
    <Suspense fallback={<CircularProgress />}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clientes" element={<ClientesPage />} />
            <Route path="/clientes/add" element={<AddCliente />} />
            <Route path="/clientes/update/:id" element={<UpdateCliente />} />
            <Route path="/funcionarios/" element={<FuncionariosPage />} />
            <Route path="/funcionarios/add" element={<AddFuncionario />} />
            <Route path="/funcionarios/update/:id" element={<UpdateFuncionario />} />
            <Route path="/creditos/aprobados" element={<CreditosAprobadosPage />} />
            <Route path="/creditos/pendientes" element={<CreditosPendientesPage />} />
            <Route path="/creditos/add" element={<AddCredito />} />
            <Route path="/creditos/update/:id" element={<UpdateCredito />} />
        </Routes>
    </Suspense>
);
  
export default AppRoutes;