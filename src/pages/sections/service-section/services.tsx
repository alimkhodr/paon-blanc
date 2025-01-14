import { useState, useMemo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography, Container, styled, Button, Box } from '@mui/material';
import theme from '../../../theme';
import { WhatsApp } from '@mui/icons-material';
import StyledButtonGreen from '../../../components/StyledButton/StyledButtonGreen';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import services from './services-data';
import ServiceModal from './service-modal';

// Estilos fora do componente para evitar recriação desnecessária
const StyledServices = styled('div')(({ theme }) => ({
  padding: '40px 0px',
  backgroundColor: theme.palette.primary.main,
}));

const StyledCard = styled('div')(() => ({
  marginBottom: '40px',
  borderRadius: 5,
  border: 'none',
  padding: 25,
  display: 'flex',
  gap: 8,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  backgroundColor: theme.palette.background.default,
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: 280,
}));

const SwiperContainer = styled(Box)(() => ({
  '.swiper-button-next:after': {
    display: 'none',
  },
  '.swiper-button-prev:after': {
    display: 'none',
  },
  '.swiper-pagination-bullet': {
    background: theme.palette.background.default,
  },
}));

const Service = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    category: string;
    items: { text: string; price: string }[];
  } | null>(null);

  // Estado para armazenar o slide atual
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoização para evitar recriação de dados do carrossel
  const memoizedServices = useMemo(() => services, []);

  const handleOpenModal = (service: { category: string; items: { text: string; price: string }[] }) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <StyledServices>
      <Container>
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          color={'background.default'}
        >
          Serviços e preços
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color={'background.default'}
        >
          Nossos serviços disponíveis
        </Typography>

        <SwiperContainer sx={{ mt: 4 }}>
          <Swiper
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)} // Atualiza o slide atual
            initialSlide={currentSlide} // Preserva o slide atual
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 8000 }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              400: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1,
              },
              800: {
                slidesPerView: 3,
              },
            }}
          >
            {memoizedServices.map((service, index) => (
              <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                <StyledCard>
                  <img
                    src={service.img}
                    alt={service.category}
                    style={{ width: '100%', borderRadius: 5 }}
                  />
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color={theme.palette.primary.main}
                  >
                    {service.category}
                  </Typography>
                  {service.items.slice(0, 4).map((item, idx) => (
                    <Typography key={idx} variant="body2">
                      {item.text} - R$ {item.price}
                    </Typography>
                  ))}
                  {service.items.length > 3 && (
                    <Button
                      sx={{ textTransform: 'none', padding: '3px 0px' }}
                      onClick={() => handleOpenModal(service)}
                    >
                      VER MAIS
                    </Button>
                  )}
                  <StyledButtonGreen 
                    startIcon={<WhatsApp />}
                    onClick={() => window.open(`https://wa.me/5512996119002?text=Ol%C3%A1!%0AGostaria%20de%20agendar%20uma%20sessão%20de%20*${service.category}*.`, '_blank')}
                  >
                    Agendar
                  </StyledButtonGreen>
                </StyledCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </Container>

      {selectedService && (
        <ServiceModal
          open={modalOpen}
          handleClose={handleCloseModal}
          keepMounted 
          category={selectedService.category}
          item={selectedService.items
            .map((item) => `${item.text} - R$ ${item.price}`)
            .join('\n')}
        />
      )}
    </StyledServices>
  );
};

export default Service;
