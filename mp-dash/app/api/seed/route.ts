import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Product from '@/models/Product';

export async function GET() {
  try {
    await connectDB();
    
    // Data dummy yang kemarin kita buat
    const dummyProducts = [
      { name: "Voucher MLBB 1000 DM", price: 150000, category: "Voucher", image: "https://placehold.co/400x300?text=MLBB" },
      { name: "Steam Wallet $10", price: 165000, category: "Top Up", image: "https://placehold.co/400x300?text=Steam" }
    ];

    // Bersihkan dulu databasenya, lalu masukkan data baru
    await Product.deleteMany({});
    await Product.insertMany(dummyProducts);

    return NextResponse.json({ message: "Data berhasil di-seed!" });
  } catch (error) {
    return NextResponse.json({ error: "Gagal seeding" }, { status: 500 });
  }
}