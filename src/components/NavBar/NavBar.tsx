import { AppBar, MenuItem, styled, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import theme from "../../theme";
import Logo from "../../assets/images/logo/logo_deitada.svg"

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main,
        height: '80px'
    }));

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <AppBar position="fixed">
                <StyledToolbar>
                    <img src={Logo} alt="Logo" style={{ height: "40px", margin: 5}} />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', alignItems: 'center' }}>
                        <MenuItem sx={{ display: { xs: 'none', md: 'block' } }} component="a" href="#about">Home</MenuItem>
                        <Typography sx={{ display: { xs: 'none', md: 'block', color: theme.palette.background.paper } }} >\\</Typography>
                        <MenuItem sx={{ display: { xs: 'none', md: 'block' } }} component="a" href="#skills">Procedimentos</MenuItem>
                        <Typography sx={{ display: { xs: 'none', md: 'block', color: theme.palette.background.paper } }} >\\</Typography>
                        <MenuItem sx={{ display: { xs: 'none', md: 'block' } }} component="a" href="#projects">Sobre</MenuItem>
                        <Typography sx={{ display: { xs: 'none', md: 'block', color: theme.palette.background.paper } }} >\\</Typography>
                        <MenuItem sx={{ display: { xs: 'none', md: 'block' } }} component="a" href="#footer">Contato</MenuItem>
                    </div>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon/>
                    </IconButton>
                </StyledToolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={open}
                onClose={handleDrawerToggle}
                sx={{display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { backgroundColor: theme.palette.background.paper, color: theme.palette.primary.main } }}
            >
                <List>
                    <ListItem button component="a" href="#about" onClick={handleDrawerToggle}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component="a" href="#skills" onClick={handleDrawerToggle}>
                        <ListItemText primary="Procedimentos" />
                    </ListItem>
                    <ListItem button component="a" href="#projects" onClick={handleDrawerToggle}>
                        <ListItemText primary="Sobre" />
                    </ListItem>
                    <ListItem button component="a" href="#footer" onClick={handleDrawerToggle}>
                        <ListItemText primary="Contato" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default NavBar;
