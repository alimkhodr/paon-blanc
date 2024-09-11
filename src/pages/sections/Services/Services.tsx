import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Typography, Container, styled, Grid, CardActions, Button } from '@mui/material';
import theme from '../../../theme';
import Massagem from '../../../assets/images/massagem.jpg'
import { ArrowDropDown } from '@mui/icons-material';

const Service = () => {
  const StyledServices = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
    backgroundColor: theme.palette.background.paper
  }));

  const StyledCard = styled("div")(() => ({
    borderRadius: "10px",
    border: "none",
    padding: 25,
    display: "flex",
    gap: 5,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: theme.palette.background.default,
    height: '100%'
  }));

  return (
    <StyledServices>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color={theme.palette.primary.main}
        >
          Nossos Procedimentos
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
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <img src={Massagem} alt="massagem" style={{ width: "100%", borderRadius: 5 }} />
              <Typography
                variant="h6"
                fontWeight="bold"
                color={theme.palette.primary.main}
              >
                Nossos Procedimentos
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
              <CardActions>
                <Button
                  size="small"
                  endIcon={<ArrowDropDown />}
                >Tabela de preços
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <img src={Massagem} alt="massagem" style={{ width: "100%", borderRadius: 5 }} />
              <Typography
                variant="h6"
                fontWeight="bold"
                color={theme.palette.primary.main}
              >
                Nossos Procedimentos
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
              <CardActions>
                <Button
                  size="small"
                  endIcon={<ArrowDropDown />}
                >Tabela de preços
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <img src={Massagem} alt="massagem" style={{ width: "100%", borderRadius: 5 }} />
              <Typography
                variant="h6"
                fontWeight="bold"
                color={theme.palette.primary.main}
              >
                Nossos Procedimentos
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
              <CardActions>
                <Button
                  size="small"
                  endIcon={<ArrowDropDown />}
                >Tabela de preços
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </StyledServices>
  );
};

export default Service;
