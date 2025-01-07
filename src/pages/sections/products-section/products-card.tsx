import { Box, CardActions, CardContent, CardMedia, Chip, styled, Typography } from "@mui/material";
import StyledButtonGreen from "../../../components/StyledButton/StyledButtonGreen";

interface Props {
  image: string;
  product: string;
  price: string;
  url: string;
}

const StyledCard = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: 5,
  border: `1px solid #ccc`,
  transition: "transform 0.3s ease",
  minWidth: 150,
  "&:hover": {
    transform: 'scale(1.03)',
  },
}));

const ProductCard: React.FC<Props> = ({ image, product, price, url }) => {
  return (
    <StyledCard>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 1 }}>
        <Chip size="small" label="Novo" sx={{ backgroundColor: "#2ba048", color: "white", borderRadius: 1 }} />
      </Box>
      <CardMedia
        sx={{ height: 170 }}
        image={image}
        title={product}
      />
      <CardContent>
        <Typography variant="body1">
          {product}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          R$ {price}
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButtonGreen
          sx={{ width: '100%' }}
          size="small"
          onClick={() => window.open(url, '_blank')}
        >
          Saber mais
        </StyledButtonGreen>
      </CardActions>
    </StyledCard>
  );
};

export default ProductCard;
