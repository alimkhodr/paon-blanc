import { Box, Container, styled, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import theme from '../../../../assets/theme';
import ContactButton from '../../../../components/styled-button/contact-button';
// import { ListItemText } from '@mui/material';

const Contact = () => {
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
                    <iframe
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: 5 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_API_KEY}&q=Edificio+Infinity+Tower%2C+R.+dos+Piquiroes%2C+40+-+Sala+803+-+Jardim+Aquarius%2C+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP%2C+12246-020">`}
                    />
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

                        {/* <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="h5" fontWeight="bold">Horário de funcionamento</Typography>
                            <ListItemText sx={{ mt: 0, mb: 0 }}>
                                <ListItemText>Segunda a Sexta: 9h às 19h</ListItemText>
                                <ListItemText>Sábado: 9h às 13h</ListItemText>
                            </ListItemText>
                        </Box> */}

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
