import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../theme'; // Supondo que você tenha um arquivo de tema
import slides from './slides-data';
import StyledButton from '../../../components/StyledButton/StyledButtonGreen';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
        height: 'calc(95dvh)',
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
                transform: { xs: 'translate(-50%, -50%)', md: 'translate(-100%, -50%)' },
                alignItems: 'flex-start',
                textAlign: 'left',
                padding: 2,
                borderRadius: 2,
                gap: 1,
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  {slide.title}
                </Typography>
                <Typography variant="h6">
                  {slide.subtitle}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                component="div"
                dangerouslySetInnerHTML={{ __html: slide.text }}
              />
              <StyledButton
                variant="contained"
                startIcon={<WhatsAppIcon/>}
                rel="noopener noreferrer"
                sx={{ mt: 1}}
                onClick={() => window.open(`https://wa.me/5512996119002?text=Ol%C3%A1!%0AGostaria%20de%20agendar%20uma%20sessão%20do%20*${slide.subtitle}*%20de%20*${slide.title}*.`, '_blank')}
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
