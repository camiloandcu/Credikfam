import axios from 'axios';

const api = axios.create({
    baseURL: 'http://138.197.86.232:8080', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;