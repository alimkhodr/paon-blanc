import { Box, Button, Container, IconButton, styled, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
    const StyledContact = styled('div')(({ theme }) => ({
        padding: '40px 0px',
        background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 40%, ${theme.palette.background.paper} 40%, ${theme.palette.background.paper} 100%)`,
    }));

    return (
        <StyledContact>
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.17333992172425!2d-45.908833018473416!3d-23.21492590240116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc35ab7fcf9253%3A0x5b698e4f060e2154!2sPromovere%20Vita%20-%20Coworking!5e0!3m2!1spt-BR!2sbr!4v1736117182280!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: 5 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', gap: {xs: 3, md: 6} }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="h5" fontWeight="bold">Contato</Typography>
                            <Button size="large" startIcon={<WhatsAppIcon />} sx={{ padding: '0px' }}>
                                (12) 98888-8888
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="h5" fontWeight="bold">Endereço</Typography>
                            <Typography variant="body1" textAlign='left'>
                                R. dos Piquiroes, 40 - Jd. Aquarius<br />
                                Edifício Infinity - Sala 808<br />
                                São José dos Campos - SP
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="h5" fontWeight="bold">Redes Sociais</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5, alignItems: "center" }}>
                                <IconButton color="primary" aria-label="InstagramIcon" sx={{ padding: '0px' }}>
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="FacebookIcon" sx={{ padding: '0px' }}>
                                    <FacebookIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </StyledContact>
    );
};

export default Contact;
