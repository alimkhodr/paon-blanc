import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography, Container, styled, Button, Box } from '@mui/material';
import theme from '../../../theme';
import Massagem from '../../../assets/images/massagem.jpg';
import { WhatsApp } from '@mui/icons-material';
import StyledButtonGreen from '../../../components/StyledButton/StyledButtonGreen';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const datas = [
  {
    img: Massagem,
    title: 'Cílios',
    text: 'Cílios Completo - R$180,00<br/>Manutenção 50% - R$99,00<br/>Manutenção 70% - R$69,00<br/>Lash Lifting - R$159,00',
  },
  {
    img: Massagem,
    title: 'Pigmentações',
    text: 'Tinturinha Temporária - R$29,00<br/>Brow Lumination - R$149,00<br/>Micro NanoBlanding - R$380,00<br/>Micro Labial - R$499,00<br/>Retoque Micro - R$40,00',
  },
  {
    img: Massagem,
    title: 'Estética Facial',
    text: 'Limpeza de Pele - R$129,00<br/>Peeling Químico - R$99,00<br/>Revitalização Facial - R$79,00<br/>Nutrição Facial - R$79,00<br/>Hidra Lips Gloss (Seção) - R$249,00<br/>Drenagem Linfática Facial - R$69,00<br/>Massagem Relaxante Facial - R$69,00',
  },
  {
    img: Massagem,
    title: 'Corporal',
    text: 'Massagem Relaxante - R$119,00<br/>Drenagem Linfática - R$119,00<br/>Liberação Miofascial - R$119,00<br/>Massagem Desportiva - R$119,00<br/>Gomage e Banho de Lua - R$99,00 (a partir) ',
  },
  {
    img: Massagem,
    title: 'Serviços',
    text: 'Sobrancelhas - R$40,00<br/>Tinturinha - R$29,00<br/>Micro Nanoblaiding - R$380,00',
  },
  {
    img: Massagem,
    title: 'Depilação Cera',
    text: 'Buço - R$21,00<br/>Queixo/Pescoço - R$21,00<br/>Nariz - R$18,00<br/>Laterais do Rosto - R$39,00<br/>Rosto Completo - R$69,00<br/>Axilas - R$31,00<br/>Braços - R$39,00<br/>Íntima Completa - R$59,00<br/>Íntima Simples - R$46,00<br/>Perianal - R$21,00<br/>Nádegas - R$31,00<br/>Coxa - R$38,00<br/>Meia Perna - R$38,00<br/>Perna - R$69,00<br/>Lombar - R$28,00<br/>Costas - R$62,00<br/>Abdômen - R$39,00',
  },
  {
    img: Massagem,
    title: 'Depilação Lazer (F)',
    text: 'Buço - R$52,00<br/>Queixo/Pescoço - R$52,00<br/>Lateral do Rosto - R$52,00<br/>Rosto Completo - R$120,00<br/>Axilas - R$79,00<br/>Linha Alba - R$35,00<br/>Braços - R$139,00<br/>Íntima Completa - R$189,00<br/>Íntima Simples - R$105,00<br/>Coxas - R$129,00<br/>Meia Perna - R$129,00<br/>Perna - R$259,00<br/>Costas - R$189,00<br/>',
  },
  {
    img: Massagem,
    title: 'Depilação Lazer (M)',
    text: 'Barba Completa - R$179,00<br/>Pescoço e Maçãs - R$79,00<br/>Axilas - R$89,00<br/>Braços - R$159,00<br/>Costas - R$239,00<br/>Abdômen e Tórax - R$269,00<br/>Pernas - R$289,00<br/>',
  },
];

const SwiperContainer = styled(Box)(() => ({
  '.swiper-button-next:after': {
    display: 'none',
  },
  '.swiper-button-prev:after': {
    display: 'none',
  },
  '.swiper-pagination-bullet': {
    display: 'none',
  },
}));

const Service = () => {
  const StyledServices = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    paddingTop: '90px',
    paddingBottom: '50px',
    backgroundColor: theme.palette.background.paper,
  }));

  const StyledCard = styled('div')(() => ({
    borderRadius: '10px',
    border: 'none',
    padding: 25,
    display: 'flex',
    gap: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.background.default,
    alignItems: 'flex-start',
  }));



  const MAX_LINES = 3;

  const RenderTextWithToggle = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const getLimitedText = (text: string) => {
    const textArray = text.split('<br/>');
    if (textArray.length <= MAX_LINES || expanded) {
      return textArray;
    }
    return textArray.slice(0, MAX_LINES).concat();
  };

  return (
    <>
      {getLimitedText(text).map((line, index) => {
        const [product, price] = line.split(' - ');

        return (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="body2" color="text.secondary" style={{ flex: 1 }}>
              {product}
            </Typography>
            {price && (
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  marginLeft: 'auto',
                }}
              >
                {price}
              </Typography>
            )}
          </Box>
        );
      })}
      {text.split('<br/>').length > MAX_LINES && (
        <Button
          onClick={handleToggle}
          sx={{ textTransform: 'none', padding: 0, mt: '-5px' }}
        >
          {expanded ? 'Ler menos' : 'Ler mais'}
        </Button>
      )}
    </>
  );
};
  return (
    <StyledServices>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          color={theme.palette.primary.main}
        >
          Serviços e preços
        </Typography>
        <Typography variant="body1" textAlign="center">
          Nossos serviços disponiveis e os preços referente a de cada um
        </Typography>

        <SwiperContainer sx={{ mt: 4 }}>
          <Swiper
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
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 3,
              },
            }}
          >
            {datas.map((data, index) => (
              <SwiperSlide key={index}>
                <StyledCard>
                  <img
                    src={data.img}
                    alt="massagem"
                    style={{ width: '100%', borderRadius: 5 }}
                  />
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color={theme.palette.primary.main}
                  >
                    {data.title}
                  </Typography>
                  <RenderTextWithToggle text={data.text} />
                  <StyledButtonGreen startIcon={<WhatsApp />}>
                    Agendar
                  </StyledButtonGreen>
                </StyledCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </Container>
    </StyledServices>
  );
};

export default Service;