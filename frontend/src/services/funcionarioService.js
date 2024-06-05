import api from './api';

export const getFuncionarios = () => api.get('/funcionarios');
export const getFuncionarioById = (id) => api.get(`/funcionarios/${id}`);
export const createFuncionario = (funcionario) => api.post('/funcionarios', funcionario);
export const updateFuncionario = (id, funcionario) => api.put(`/funcionarios/${id}`, funcionario);
export const deleteFuncionario = (id) => api.delete(`/funcionarios/${id}`);