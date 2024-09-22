import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Typography, Container, styled, Grid, Button } from '@mui/material';
import theme from '../../../theme';
import Massagem from '../../../assets/images/massagem.jpg';
import { WhatsApp } from '@mui/icons-material';
import StyledButtonGreen from '../../../components/StyledButton/StyledButtonGreen';

const datas = [
  {
    img: Massagem,
    title: 'Cílios',
    text: 'Pacote mensal - 1x por semana R$450,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00',
  },
  {
    img: Massagem,
    title: 'Pigmentações',
    text: 'Pacote mensal - 1x por semana R$450,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00<br/>Pacote mensal - 2x por semana R$680,00',
  },
];

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
        return textArray.join('<br/>');
      }
      return textArray.slice(0, MAX_LINES).join('<br/>') + '...';
    };

    return (
      <>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
          dangerouslySetInnerHTML={{ __html: getLimitedText(text) }}
        />
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
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color={theme.palette.primary.main}
        >
          Serviços e preços
        </Typography>
        <Typography variant="body2" textAlign="center">
          Lorem ipsum dolor sit amet consectetur
        </Typography>
        <Grid
          container
          spacing={2}
          mt={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {datas.map((data, index) => (
            <Grid item xs={12} sm={4} key={index} display={'flex'} alignItems={'center'}>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledServices>
  );
};

export default Service;
