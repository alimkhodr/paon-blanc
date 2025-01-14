import { AppBar, MenuItem, styled, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography, keyframes, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react";
import theme from "../../theme";
import logo_deitada from "../../assets/logo/logo_deitada.svg";
import logo_blanc from "../../assets/logo/logo_blanc.svg";

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('slide');
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const sections = [
        { id: 'slide', label: 'Home' },
        { id: 'services', label: 'Procedimentos' },
        { id: 'products', label: 'Produtos' },
        { id: 'gallery', label: 'Fotos' },
        { id: 'contact', label: 'Contato' },
        { id: 'address', label: 'Endereço' },
    ];

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
        height: '90px',
        boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.2)'
    }));

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleScroll = () => {
        let foundSection = false;
        sections.forEach((section) => {
            const sectionElement = document.getElementById(section.id);
            const rect = sectionElement?.getBoundingClientRect();
            if (rect && rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                setActiveSection(section.id);
                if (window.location.hash !== `#${section.id}`) {
                    window.history.pushState(null, '', `#${section.id}`);
                }
                foundSection = true;
            }
        });

        if (!foundSection) {
            setActiveSection('slide');
            if (window.location.hash !== '#slide') {
                window.history.pushState(null, '', '#slide');
            }
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },);

    const handleScrollToSection = (sectionId: string) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            window.scrollTo({
                top: sectionElement.offsetTop - 80,
                behavior: 'smooth',
            });
        }
    };

    const handleDrawerItemClick = (sectionId: string) => {
        handleScrollToSection(sectionId);
        handleDrawerToggle();
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 'none',
                    backgroundColor: 'transparent',
                    display: "flex",
                    alignItems: { xs: 'stretch', lg: 'center' },
                    padding: { xs: '0px', lg: '15px' },
                    animation: `${slideDown} 0.5s ease-out`,
                }}
            >
                <StyledToolbar sx={{ borderRadius: { xs: 0, lg: 50 } }}>
                    <img
                        src={isDesktop ? logo_deitada : logo_blanc }
                        alt="Logo"
                        style={{ height: "60px", margin: '5px 30px 5px 30px', cursor: 'pointer' }}
                        onClick={() => handleScrollToSection('slide')}
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', alignItems: 'center' }}>
                        {sections.map((section, index) => (
                            <>
                                <MenuItem
                                    key={section.id}
                                    sx={{
                                        fontSize: '1.2rem',
                                        padding: '1px 15px',
                                        borderRadius: '15px',
                                        margin: '0 10px',
                                        backgroundColor: activeSection === section.id ? theme.palette.background.default : 'transparent',
                                        color: activeSection === section.id ? theme.palette.secondary.main : 'inherit',
                                        transition: 'background-color 0.3s ease, color 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: theme.palette.background.default,
                                            color: theme.palette.secondary.main,
                                        },
                                        display: { xs: 'none', lg: 'block' } // Atualizado para usar lg
                                    }}
                                    component="a"
                                    onClick={() => handleScrollToSection(section.id)}
                                >
                                    {section.label}
                                </MenuItem>

                                {index < sections.length - 1 && (
                                    <Typography sx={{ display: { xs: 'none', lg: 'block', color: theme.palette.background.default } }}>
                                        \\
                                    </Typography>
                                )}
                            </>
                        ))}
                    </div>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: 'flex', lg: 'none' } }} // Atualizado para usar lg
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </StyledToolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={open}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', lg: 'none' }, '& .MuiDrawer-default': { backgroundColor: theme.palette.background.default, color: theme.palette.primary.main } }}
            >
                <List>
                    {sections.map((section) => (
                        <ListItem
                            key={section.id}
                            button
                            onClick={() => handleDrawerItemClick(section.id)}
                            sx={{
                                backgroundColor: activeSection === section.id ? theme.palette.background.default : 'transparent',
                                color: activeSection === section.id ? theme.palette.primary.main : 'inherit'
                            }}
                        >
                            <ListItemText primary={section.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default NavBar;
