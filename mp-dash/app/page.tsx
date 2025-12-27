'use client';
import { SimpleGrid, Container, Title } from '@mantine/core';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/Grid/ProductCard';

export default function HomePage() {
  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="xl">Rekomendasi Produk Game</Title>
      
      {/* Di Laravel ini seperti @foreach($products as $product) */}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  );
}