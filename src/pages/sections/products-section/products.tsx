import { useEffect, useState } from 'react';
import { Container, styled, Typography, Grid, Pagination, Link } from '@mui/material';
import ProductCard from './products-card';
import axios from 'axios';

interface Product {
  id: string;
  name: string;
  price: number;
  baseUrl: string;
  images: { imageUrl: string }[];
  variants: { options: { code: string; slugName: string; } };
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const StyledProducts = styled('div')(({ theme }) => ({
    padding: '40px 0px',
    backgroundColor: theme.palette.background.paper,
  }));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const urls = [
          'https://dv9547x9lh.execute-api.us-east-2.amazonaws.com/product/api/v2/Product/ListV2?CategoryId=2BF65B5E-60D3-EB11-A315-005056010963&PageSize=10',
          'https://dv9547x9lh.execute-api.us-east-2.amazonaws.com/product/api/v2/Product/ListV2?CategoryId=8694D27C-8EAE-EF11-84F8-02F716A02C8F&PageSize=10',
          'https://dv9547x9lh.execute-api.us-east-2.amazonaws.com/product/api/v2/Product/ListV2?CategoryId=5FA5617D-8FAE-EF11-84F8-02F716A02C8F&PageSize=10',
          'https://dv9547x9lh.execute-api.us-east-2.amazonaws.com/product/api/v2/Product/ListV2?CategoryId=5AECB19A-63D3-EB11-A315-005056010963&PageSize=10',
        ];

        const responses = await Promise.all(urls.map(url => axios.get(url)));
        const allProducts = responses
          .map(response => response.data.Data.products)
          .flat();

        const uniqueProductsMap = new Map<string, Product>();
        allProducts.forEach(product => {
          if (!uniqueProductsMap.has(product.id)) {
            uniqueProductsMap.set(product.id, product);
            console.log('uniqueProductsMap', uniqueProductsMap);
          }
        });
        setProducts(Array.from(uniqueProductsMap.values()));
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <StyledProducts>
      <Container>
        <Typography variant="h3" textAlign="center" fontWeight="bold">
          Produtos
        </Typography>
        <Typography variant="body1" textAlign="center">
          Em parceria com&nbsp;
          <Link href="https://farmasi.com.br/paonblanccosmeticos" underline="always">
            {'Farmasi'}
          </Link>
        </Typography>
        <Grid container spacing={2} justifyContent="center" mt={3}>
          {displayedProducts.map(product => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={5}
              md={3}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <ProductCard
                image={product.images[0]?.imageUrl || ''}
                product={product.name}
                price={product.price.toFixed(2).replace('.', ',')}
                url={`https://farmasi.com.br/paonblanccosmeticos/product-detail/${product.variants?.[0]?.options?.[0]?.slugName}?pid=${product.variants?.[0]?.options?.[0]?.code}`}
              />
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={Math.ceil(products.length / productsPerPage)}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          color="primary"
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
        />
      </Container>
    </StyledProducts>
  );
};

export default Products;
