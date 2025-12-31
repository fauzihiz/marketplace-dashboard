import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Tolong definisikan MONGODB_URI di .env.local');
}

export const connectDB = async () => {
  // Cek apakah sudah terkoneksi supaya tidak buat koneksi baru terus-menerus

  if (mongoose.connection.readyState >= 1) return;

  // Cek URI di dalam fungsi agar tidak error saat inisialisasi modul
  if (!MONGODB_URI) {
    console.error('MONGODB_URI tidak ditemukan!');
    return; 
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    console.error("Connection error:", error);
  }
};