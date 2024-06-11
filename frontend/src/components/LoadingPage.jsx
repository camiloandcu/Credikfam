import { CircularProgress } from '@mui/material';
import React from 'react';

const LoadingPage = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <CircularProgress />
        </div>
    );
};

export default LoadingPage;