import { Box, Container, styled, Typography, CircularProgress } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import theme from '../../../../assets/theme';
import ContactButton from '../../../../components/styled-button/contact-button';
import { useEffect, useState } from 'react';

const Contact = () => {
    const [isIframeReady, setIsIframeReady] = useState(false);
    const [hasError, setHasError] = useState(false);
    const API_KEY = import.meta.env.VITE_API_KEY;
    const MAP_URL = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Edificio+Infinity+Tower%2C+R.+dos+Piquiroes%2C+40+-+Sala+803+-+Jardim+Aquarius%2C+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP%2C+12246-020`;

    // Validate API key and set iframe ready state
    useEffect(() => {
        if (API_KEY) {
            // Optional: Perform additional validation for the API key if needed
            // For example, a simple fetch request to check if the key is working
            fetch(MAP_URL)
                .then((response) => {
                    if (response.status === 200) {
                        setIsIframeReady(true);
                    } else {
                        setHasError(true);
                    }
                })
                .catch(() => {
                    setHasError(true);
                });
        } else {
            setHasError(true);
        }
    }, [API_KEY]);

    const StyledContact = styled('div')(({ theme }) => ({
        padding: '40px 0px',
        background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.background.paper} 50%, ${theme.palette.background.paper} 100%)`,
        [theme.breakpoints.down('md')]: {
            background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 35%, ${theme.palette.background.paper} 35%, ${theme.palette.background.paper} 100%)`,
        },
    }));

    return (
        <StyledContact>
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                    {/* Show loading spinner while waiting for iframe to be ready */}
                    {hasError ? (
                        <Typography variant="body1" color="error">
                            There was an issue loading the map. Please try again later.
                        </Typography>
                    ) : isIframeReady ? (
                        <iframe
                            width="100%"
                            height="300"
                            style={{ border: 0, borderRadius: 5 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src={MAP_URL}
                        />
                    ) : (
                        <CircularProgress />
                    )}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', gap: { xs: 3, md: 3 } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="h5" fontWeight="bold">Contato</Typography>
                            <ContactButton
                                icon={WhatsAppIcon}
                                color={theme.palette.background.default}
                                backgroundColor={theme.palette.primary.main}
                                link='https://wa.me/5512996119002?text=Olá!'
                                text='(12) 99611-9002'
                            />
                            <ContactButton
                                icon={MailOutlineIcon}
                                color={theme.palette.background.default}
                                backgroundColor={theme.palette.primary.main}
                                link='mailto:paonblancestetica@gmail.com'
                                text='paonblancestetica@gmail.com'
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="h5" fontWeight="bold">Endereço</Typography>
                            <Typography variant="body1" textAlign='left'>
                                R. dos Piquiroes, 40 - Jd. Aquarius<br />
                                Edifício Infinity - Sala 808<br />
                                São José dos Campos - SP<br />
                                <Typography variant="button" fontWeight="bold">
                                    Estacionamento gratuito
                                </Typography>
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="h5" fontWeight="bold">Redes Sociais</Typography>
                            <ContactButton
                                icon={InstagramIcon}
                                color={theme.palette.background.default}
                                backgroundColor={theme.palette.primary.main}
                                link='https://www.instagram.com/paonblancestetica'
                                text='@paonblancestetica'
                            />
                            <ContactButton
                                icon={FacebookIcon}
                                color={theme.palette.background.default}
                                backgroundColor={theme.palette.primary.main}
                                link='https://www.facebook.com/biancacanutoestetica'
                                text='Bianca Canuto Estética'
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </StyledContact>
    );
};

export default Contact;
