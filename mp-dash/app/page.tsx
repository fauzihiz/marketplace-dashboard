/*'use client';
import { SimpleGrid, Container, Title } from '@mantine/core';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/Grid/ProductCard';

export default function HomePage() {
  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="xl">Rekomendasi Produk Game</Title>*/
      
      /*{ Di Laravel ini seperti @foreach($products as $product) }*/
      /*<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  );
}*/

import { SimpleGrid, Container, Title } from '@mantine/core';
import { connectDB } from '@/lib/db';
import Product from '@/models/Product';
import { ProductCard } from '@/components/Grid/ProductCard';

// Fungsi untuk ambil data (Ibarat Controller di Laravel)
async function getProducts() {
  await connectDB();
  
  // Ambil data, urutkan dari yang terbaru (descending)
  // .lean() mengubah dokumen Mongoose yang berat menjadi objek JS biasa yang ringan
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();
  
  return products;
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="xl">Marketplace V-Gamers</Title>
      
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {products.map((product: any) => (
          /* PENTING: MongoDB menggunakan _id (dengan underscore). 
             Kita harus mengubahnya ke string agar React tidak error saat render key.
          */
          <ProductCard 
            key={product._id.toString()} 
            product={{
              ...product,
              id: product._id.toString() // Map _id ke id agar komponen ProductCard tidak bingung
            }} 
          />
        ))}
      </SimpleGrid>
      
      {products.length === 0 && (
        <p>Belum ada produk. Silakan jalankan /api/seed dulu.</p>
      )}
    </Container>
  );
}