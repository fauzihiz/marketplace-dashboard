import mongoose, { Schema, model, models } from 'mongoose';

// 1. Definisikan Struktur Data (Interface)
interface IProduct {
  name: string;
  price: number;
  category: string;
  image: string;
}

// 2. Buat Skema (Seperti Migration di Laravel)
const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

// 3. Export Model (Cek dulu apakah model sudah ada, kalau belum baru buat)
const Product = models.Product || model<IProduct>('Product', productSchema);

export default Product;