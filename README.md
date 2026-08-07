# Toko Sembako Ariesta

**Nama:** (isi nama kamu)
**NIM:** (isi NIM kamu)

## Deskripsi Project

Website & REST API untuk Toko Sembako Ariesta, sebuah UMKM sembako & kebutuhan rumah tangga. Dibangun menggunakan Node.js + Express.js dengan view engine EJS. Project ini merupakan hasil pengerjaan **UCP 1 - Sprint 1**, berisi fondasi halaman (Beranda, Produk, Detail Produk, Tanya AI), fitur filter produk, serta endpoint REST API read-only untuk data produk.

Fitur CRUD penuh, autentikasi login admin, dan logika balasan "Tanya AI" akan ditambahkan pada Sprint 2.

## Cara Menjalankan Project Secara Lokal

1. Clone repository ini
2. Install dependencies:
   ```
   npm install
   ```
3. Jalankan server (mode development, auto-restart pakai nodemon):
   ```
   npm run dev
   ```
   Atau jalankan biasa tanpa nodemon:
   ```
   npm start
   ```
4. Buka browser ke `http://localhost:3000`

## Daftar Endpoint API

| Method | Endpoint          | Deskripsi                                   | Akses  |
|--------|-------------------|----------------------------------------------|--------|
| GET    | /api/products     | Ambil seluruh data produk sembako             | Publik |

> Endpoint CRUD lengkap (POST, PUT, DELETE), login, logout, dan chat AI dummy akan ditambahkan di Sprint 2.

## Halaman Frontend

| Route            | Deskripsi                                                                 |
|-------------------|----------------------------------------------------------------------------|
| `/`               | Beranda — hero section + preview produk pilihan                            |
| `/produk`         | Daftar semua produk, bisa difilter lewat query string `?kategori=` atau `?search=` |
| `/produk/:id`     | Detail 1 produk berdasarkan ID. Menampilkan pesan wajar jika ID tidak ditemukan |
| `/tanya-ai`       | Halaman chat + form tanya (logic balasan AI menyusul di Sprint 2)          |

## Struktur Project

```
toko-sembako-ariesta/
├── app.js                 # Entry point server Express
├── data/
│   └── products.js        # Data dummy produk
├── middleware/
│   └── logger.js          # Custom request logger middleware
├── routes/
│   ├── pages.js            # Route halaman (EJS render)
│   └── api.js               # Route REST API
├── views/
│   ├── partials/
│   │   ├── head.ejs
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── produk.ejs
│   ├── produk-detail.ejs
│   └── tanya-ai.ejs
└── public/
    ├── css/style.css
    └── js/main.js
```

## Teknologi

- Node.js + Express.js
- EJS (view engine) + partials
- Tailwind CSS (via CDN)
- Vanilla JavaScript (hamburger menu, form handling)
