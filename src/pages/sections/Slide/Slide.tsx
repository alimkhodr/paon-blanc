import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from '@mui/material/styles';
import theme from '../../../theme'; // Supondo que você tenha um arquivo de tema
import massagem from '../../../assets/images/massagem.jpg'
import StyledButton from '../../../components/StyledButton/StyledButtonGreen';

const slides = [
  {
    img: massagem,
    title: 'Massagem o mês inteiro',
    text: 'Pacote mensal - 1x por semana R$450,00<br/>Pacote mensal - 2x por semana R$680,00',
    buttonText: 'Agendar',
    buttonLink: '#',
    buttonIcon: <WhatsAppIcon />,
  },
  {
    img: massagem,
    title: 'Massagem o mês inteiro',
    text: 'Pacote mensal - 1x por semana R$450,00<br/>Pacote mensal - 2x por semana R$680,00',
    buttonText: 'Agendar',
    buttonLink: '#',
    buttonIcon: <WhatsAppIcon />,
  },
  {
    img: massagem,
    title: 'Massagem o mês inteiro',
    text: 'Pacote mensal - 1x por semana R$450,00<br/>Pacote mensal - 2x por semana R$680,00',
    buttonText: 'Agendar',
    buttonLink: '#',
    buttonIcon: <WhatsAppIcon />,
  },
];

const SwiperContainer = styled(Box)(({ theme }) => ({
  '.swiper-button-next:after': {
    content: '"next"',
    color: theme.palette.primary.main,
    textShadow: 'none',
  },
  '.swiper-button-prev:after': {
    content: '"prev"',
    color: theme.palette.primary.main,
    textShadow: 'none',
  },
  '.swiper-pagination-bullet': {
    background: theme.palette.primary.main,
  },
}));

const Slide = () => {
  return (
    <SwiperContainer
      sx={{
        width: '100%',
        height: 'calc(100dvh)',
        position: 'relative',
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        loop
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.img}
              alt="Background Image"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: { xs: 'translate(-50%, -20%)', md: 'translate(-50%, 50%)' },
                alignItems: 'flex-start',
                textAlign: 'left',
                padding: 2,
                borderRadius: 4,
                gap: 1,
                backgroundColor: theme.palette.background.default,
              }}
            >
              <Typography variant="h4" color={theme.palette.primary.main} fontWeight="bold">
                {slide.title}
              </Typography>
              <Typography
                variant="body1"
                component="div"
                dangerouslySetInnerHTML={{ __html: slide.text }}
              />
              <StyledButton
                variant="contained"
                startIcon={slide.buttonIcon}
                href={slide.buttonLink}
                rel="noopener noreferrer"
              >
                {slide.buttonText}
              </StyledButton>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default Slide;
