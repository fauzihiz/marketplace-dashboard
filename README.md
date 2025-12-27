# Performance-First Marketplace Engine

## 🛠 Tech Stack:
- Frontend: Next.js (App Router), TypeScript, TailwindCSS, Mantine UI.

- State Management: Jotai (untuk handle keranjang dan filter kompleks).

- Backend: Node.js, Express.js, TypeScript.

- Database: MongoDB (dengan fokus pada Aggregation Pipeline).

## 🚀 Fitur Utama & Problem Solving
- Server-Side Rendering (SSR) & SEO Optimization: Halaman detail produk menggunakan SSR untuk menjamin index SEO yang cepat (menjawab kebutuhan SEO NextJS).

- Atomic State Management (Jotai): Mengelola shopping cart dan multi-step checkout tanpa re-render yang tidak perlu (menjawab kebutuhan performa).

- Advanced Search & Filtering: Menggunakan MongoDB Aggregation untuk filter kategori, rentang harga, dan rating secara instan.

- Mobile-First Responsive UI: Menggunakan Mantine UI + Tailwind untuk interface yang slick di mobile (menjawab kebutuhan mobile-first).

## 📅 To-Do List (3 Hari)
### Hari 1: Backend & Arsitektur Database (Fokus: Struktur & Integritas)
  [ ] Setup Project (Next.js, Express, TypeScript).

  [ ] Setup MongoDB & Desain Schema (Fokus pada: Product, Category, Order).

  [ ] Buat API CRUD untuk produk menggunakan Express + TypeScript.

  [ ] Problem Solving: Implementasikan Indexing di MongoDB pada field pencarian dan optimasi query menggunakan .aggregate().

  [ ] Integrasi Git dengan branching strategy (feature/backend-setup).

### Hari 2: Frontend & UI Components (Fokus: Mantine & Tailwind)
  [ ] Setup Mantine UI Provider & Theme (sesuaikan dengan branding gaming).

  [ ] Buat Layout Responsive (Navbar, Sidebar Filter, Product Grid).

  [ ] Implementasi Jotai untuk Global State: Global Cart dan Search Filters.

  [ ] Fetching data menggunakan Next.js Server Components untuk List Produk.

  [ ] Problem Solving: Buat komponen Reusable di Mantine UI untuk menangani Loading State (Skeleton) dan Empty State.

### Hari 3: Optimasi, SEO, & Finishing (Fokus: Performance)
  [ ] Implementasi Dinamis Metadata untuk SEO di halaman detail produk.

  [ ] Setup ESLint & Prettier untuk menjamin Clean Code.

  [ ] Optimasi Gambar dengan next/image untuk performa tinggi.

  [ ] Testing Manual: Pastikan Mobile View sempurna.

  [ ] Problem Solving: Dokumentasikan di README.md tentang bagaimana kamu menangani race conditions saat update cart atau bagaimana kamu mengoptimasi query database.

## 📦 Deliverables (Apa yang dikumpulkan)
- Link GitHub Repository: Pastikan ada riwayat Pull Request (PR) meskipun kamu kerja sendiri, untuk menunjukkan kamu paham alur kerja tim.

- Live Demo Link: (Bisa menggunakan Vercel untuk Frontend dan Render/Railway untuk Backend).

- Technical Documentation (README): Ini paling krusial. Jelaskan:

Kenapa pakai Jotai dibanding Redux? (Jawaban: Lebih ringan dan atomik untuk skalabilitas marketplace).

Bagaimana kamu menangani performa? (Jawaban: SSR untuk SEO, MongoDB indexing untuk kecepatan filter).


===============

## Small Scope

### Hari 1: Fokus di "Wajah" (Frontend & UI)
#### Goal: Web kamu terlihat profesional dan sudah bisa navigasi, meski datanya masih palsu (dummy).

[✔] Setup Project: Jalankan npx create-next-app@latest. Pilih Tailwind & App Router.

[✔] Install Mantine UI: Ikuti langkah instalasi di web Mantine. Cukup buat satu Navbar dan satu Grid untuk daftar produk.

[✔] Buat Data Dummy: Buat satu file data.js berisi array objek produk (nama, harga, gambar).

[✔] Render List: Gunakan .map() untuk menampilkan data dummy tersebut ke layar pakai Card dari Mantine.

- Progress: Kamu sudah punya web yang "kelihatan" jadi. Ini booster semangat yang besar!

### Hari 2: Fokus di "Isi" (Database & API Sederhana)
#### Goal: Data yang muncul di web bukan lagi dari file data.js, tapi dari MongoDB.

[ ] Setup MongoDB Atlas: Daftar gratis, buat cluster. Copy "Connection String"-nya.

[ ] Install Mongoose: npm install mongoose.

[ ] Hubungkan Database: Buat satu file lib/db.js untuk koneksi. (Cari tutorial "Next.js MongoDB connection" - cukup copas pola yang ada).

[ ] Buat 1 Route API: Di Next.js, buat file di app/api/products/route.ts. Isinya cuma fungsi untuk GET semua produk dari DB.

[ ] Ganti Data Dummy: Ubah map() di Hari 1 tadi untuk mengambil data dari API yang baru kamu buat menggunakan fetch.

- Progress: Kamu sudah resmi jadi "Fullstack"! Kamu sudah bisa narik data dari database ke layar.

### Hari 3: Fokus di "Interaksi" (Jotai & State)
#### Goal: User bisa klik "Tambah ke Keranjang" dan jumlahnya muncul di Navbar.

[ ] Install Jotai: npm install jotai.

[ ] Buat Atom: Buat file store.js. Isinya cuma: export const cartAtom = atom([]).

[ ] Fitur Add to Cart: Di kartu produk, tambah tombol. Saat diklik, dia akan push data ke cartAtom.

[ ] Tampilkan di Navbar: Panggil cartAtom di Navbar untuk menampilkan angka jumlah barang.

[ ] Deploy ke Vercel: Hubungkan GitHub ke Vercel. Klik Deploy. Selesai.

- Progress: Web kamu sudah interaktif dan bisa diakses orang lain (online).