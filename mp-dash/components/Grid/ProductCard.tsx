'use client';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export function ProductCard({ product }: { product: any }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={product.image} height={160} alt={product.name} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{product.name}</Text>
        <Badge color="pink" variant="light">{product.category}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Harga: Rp {product.price.toLocaleString("id-ID")}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Beli Sekarang
      </Button>
    </Card>
  );
}