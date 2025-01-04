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
              <Typography variant="h4" fontWeight="bold">
                {slide.title}
              </Typography>
              <Typography
                variant="body1"
                component="div"
                dangerouslySetInnerHTML={{ __html: slide.text }}
              />
              <StyledButton
                variant="contained"
                startIcon={<slide.buttonIcon />}
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
