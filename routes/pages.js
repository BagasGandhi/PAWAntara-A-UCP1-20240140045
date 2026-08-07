// routes/pages.js
// Route untuk halaman-halaman yang di-render pakai EJS (server-side render)

const express = require("express");
const router = express.Router();
const products = require("../data/products");

// GET / -> Beranda
router.get("/", (req, res) => {
  // Preview beberapa produk aja (misal 4 produk pertama) buat di beranda
  const previewProducts = products.slice(0, 4);

  res.render("index", {
    title: "Beranda - Toko Sembako Ariesta",
    activePage: "beranda",
    previewProducts,
  });
});

// GET /produk -> Daftar semua produk + fitur filter (kategori & search)
router.get("/produk", (req, res) => {
  const { kategori, search } = req.query;

  let filteredProducts = products;

  // Filter berdasarkan kategori (kalau query kategori ada)
  if (kategori) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === kategori.toLowerCase()
    );
  }

  // Filter berdasarkan search nama produk (kalau query search ada)
  if (search) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.render("produk", {
    title: "Produk - Toko Sembako Ariesta",
    activePage: "produk",
    products: filteredProducts,
    kategori: kategori || "",
    search: search || "",
  });
});

// GET /produk/:id -> Detail 1 produk berdasarkan id di URL
router.get("/produk/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Kalau param bukan angka valid, langsung anggap tidak ditemukan
  const product = isNaN(id) ? null : products.find((p) => p.id === id);

  res.render("produk-detail", {
    title: product
      ? `${product.name} - Toko Sembako Ariesta`
      : "Produk Tidak Ditemukan - Toko Sembako Ariesta",
    activePage: "produk",
    product,
  });
});

// GET /tanya-ai -> Halaman chat + form (belum ada logic balasan di Sprint 1)
router.get("/tanya-ai", (req, res) => {
  res.render("tanya-ai", {
    title: "Tanya AI - Toko Sembako Ariesta",
    activePage: "tanya-ai",
  });
});

module.exports = router;
