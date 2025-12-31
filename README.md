# Performance-First Marketplace Engine

## 🛠 Tech Stack:
- Monolith: Next.js, TypeScript, Tailwind CSS, Mantine UI.

- State Management: Jotai (untuk handle keranjang dan filter kompleks).

- Database: MongoDB (dengan fokus pada Aggregation Pipeline).

## 🚀 Fitur Utama & Problem Solving
- Server-Side Rendering (SSR) & SEO Optimization: Halaman detail produk menggunakan SSR untuk menjamin index SEO yang cepat (menjawab kebutuhan SEO NextJS).

- Atomic State Management (Jotai): Mengelola shopping cart dan multi-step checkout tanpa re-render yang tidak perlu (menjawab kebutuhan performa).

- Advanced Search & Filtering: Menggunakan MongoDB Aggregation untuk filter kategori, rentang harga, dan rating secara instan.

- Mobile-First Responsive UI: Menggunakan Mantine UI + Tailwind untuk interface yang slick di mobile (menjawab kebutuhan mobile-first).

## 📅 To-Do List (6 Hari)

### Hari 1: Fokus di "Wajah" (Frontend & UI)
#### Goal: Web kamu terlihat profesional dan sudah bisa navigasi, meski datanya masih palsu (dummy).

[✔] Setup Project: Jalankan npx create-next-app@latest. Pilih Tailwind & App Router.

[✔] Install Mantine UI: Ikuti langkah instalasi di web Mantine. Cukup buat satu Navbar dan satu Grid untuk daftar produk.

[✔] Buat Data Dummy: Buat satu file data.js berisi array objek produk (nama, harga, gambar).

[✔] Render List: Gunakan .map() untuk menampilkan data dummy tersebut ke layar pakai Card dari Mantine.

- Progress: Kamu sudah punya web yang "kelihatan" jadi. Ini booster semangat yang besar!

### Hari 2: Fokus di "Isi" (Database & API Sederhana)
#### Goal: Data yang muncul di web bukan lagi dari file data.js, tapi dari MongoDB.

[✔] Setup MongoDB Atlas: Daftar gratis, buat cluster. Copy "Connection String"-nya.

[✔] Install Mongoose: npm install mongoose.

[✔] Hubungkan Database: Buat satu file lib/db.js untuk koneksi. (Cari tutorial "Next.js MongoDB connection" - cukup copas pola yang ada).

[✔] Buat 1 Route API: Di Next.js, buat file di app/api/products/route.ts. Isinya cuma fungsi untuk GET semua produk dari DB.

[✔] Ganti Data Dummy: Ubah map() di Hari 1 tadi untuk mengambil data dari API yang baru kamu buat menggunakan fetch.

- Progress: Kamu sudah resmi jadi "Fullstack"! Kamu sudah bisa narik data dari database ke layar.

### Hari 3: Fokus di "Interaksi" (Jotai & State)
#### Goal: User bisa klik "Tambah ke Keranjang" dan jumlahnya muncul di Navbar.

[✔] Install Jotai: npm install jotai.

[✔] Buat Atom: Buat file store.js. Isinya cuma: export const cartAtom = atom([]).

[✔] Fitur Add to Cart: Di kartu produk, tambah tombol. Saat diklik, dia akan push data ke cartAtom.

[✔] Tampilkan di Navbar: Panggil cartAtom di Navbar untuk menampilkan angka jumlah barang.

[✔] Deploy ke Vercel: Hubungkan GitHub ke Vercel. Klik Deploy. Selesai.

- Progress: Web kamu sudah interaktif dan bisa diakses orang lain (online).

### Hari 4: Auth, RBAC & Produk Management (CRUD)
#### Goal: User bisa login dan Admin bisa kelola barang.

Requirement:

[] Setup Next-Auth (Google Login atau Email/Password).

[] Role Schema di MongoDB (Role: admin & customer).

[] Admin Dashboard: Halaman untuk Create, Read, Update, Delete (CRUD) produk.

[] Dynamic Routing & Detail Page: Ketika produk di klik, muncul halaman detail khusus produk tersebut (menggunakan [id]/page.tsx).

- Why: Tanpa Auth, kita tidak bisa tahu siapa yang punya keranjang belanja dan siapa yang boleh edit harga barang.

### Hari 5: Transaction, Stok Logic & Midtrans (Payment)
#### Goal: User bisa beli dan bayar secara otomatis.

Requirement:

[] Checkout System: Mengirim data dari Jotai ke MongoDB sebagai "Order" baru.

[] Checkout API: Mengunci harga saat itu dan mengecek stok.

[] Integrasi Midtrans Snap: Muncul popup pembayaran.

[] Webhook Handler: Menangkap laporan dari Midtrans jika user sudah bayar, lalu otomatis mengubah status di database ke "PAID".

- Why: Ini adalah jantung dari Marketplace. Menunjukkan kamu bisa menangani uang dan sinkronisasi data.

### Hari 6: Statistik Admin & Detail Finishing
#### Goal: Admin bisa lihat grafik performa toko.

Requirement:

[] Filtering & Search: Mencari produk berdasarkan nama atau kategori secara real-time.

[] Menggunakan MongoDB .aggregate() untuk menghitung total pendapatan bulanan.

[] Visualisasi data dengan Chart (Mantine Charts/Recharts).

- Why: Bisnis butuh angka. Mid-level dev harus bisa menyajikan data mentah menjadi wawasan bisnis.