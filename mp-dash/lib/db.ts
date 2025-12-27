import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Tolong definisikan MONGODB_URI di .env.local');
}

export const connectDB = async () => {
  // Cek apakah sudah terkoneksi supaya tidak buat koneksi baru terus-menerus
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database terhubung dengan sukses!");
  } catch (error) {
    console.error("Gagal koneksi database:", error);
  }
};