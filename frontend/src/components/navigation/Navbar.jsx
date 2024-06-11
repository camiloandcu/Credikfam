import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Menu, People, Engineering, Payments, Pending } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                CREDIKFAM
            </Typography>
            <List>
                <ListItem button component={Link} to="/clientes">
                    <ListItemIcon>
                        <People />
                    </ListItemIcon>
                    <ListItemText primary="Clientes" />
                </ListItem>
                <ListItem button component={Link} to="/creditos/pendientes">
                    <ListItemIcon>
                        <Pending />
                    </ListItemIcon>
                    <ListItemText primary="Creditos pendientes" />
                </ListItem>
                <ListItem button component={Link} to="/creditos/aprobados">
                    <ListItemIcon>
                        <Payments />
                    </ListItemIcon>
                    <ListItemText primary="Creditos aprobados" />
                </ListItem>
                <ListItem button component={Link} to="/funcionarios">
                    <ListItemIcon>
                        <People />
                    </ListItemIcon>
                    <ListItemText primary="Funcionarios" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{px: 5}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                        onClick={handleDrawerToggle}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        CREDIKFAM
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button color="inherit" component={Link} to="/clientes">
                            <People />
                            Clientes
                        </Button>
                        <Button color="inherit" component={Link} to="/creditos/pendientes">
                            <Pending />
                            Creditos pendientes
                        </Button>
                        <Button color="inherit" component={Link} to="/creditos/aprobados">
                            <Payments />
                            Creditos aprobados
                        </Button>
                        <Button color="inherit" component={Link} to="/funcionarios">
                            <Engineering/>
                            Funcionarios
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

export default Navbar;