import api from './api';

export const getCreditos = () => api.get('/creditos');
export const getCreditosAprobados = () => api.get('/creditos/aprobado/True');
export const getCreditosPendientes = () => api.get('/creditos/aprobado/False');
export const getCreditoById = (id) => api.get(`/creditos/${id}`);
export const createCredito = (credito) => api.post('/creditos', credito);
export const updateCredito = (id, credito) => api.put(`/creditos/${id}`, credito);
export const aprobarCredito = (id) => api.put(`/creditos/${id}/aprobar`);
export const deleteCredito = (id) => api.delete(`/creditos/${id}`);