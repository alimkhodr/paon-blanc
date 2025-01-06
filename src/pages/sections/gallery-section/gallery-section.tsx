import { Box, Container, ImageList, ImageListItem, styled, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import images from './gallery-data';

const Gallery = () => {
  const StyledGallery = styled('div')(({ theme }) => ({
    padding: '40px 0px',
    backgroundColor: theme.palette.primary.main,
  }));


  return (
    <StyledGallery>
      <Container>
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          color={'background.default'}
        >
          Fotos
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color={'background.default'}
        >
          Fotos de serviços realizados
        </Typography>

        <Box sx={{ mt: 4 }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {images.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    </StyledGallery>
  );
};

export default Gallery;