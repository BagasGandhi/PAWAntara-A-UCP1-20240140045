// routes/api.js
// Route untuk REST API (JSON response)
// Sprint 1: baru GET /api/products (read-only)
// Sprint 2 nanti nambah POST/PUT/DELETE + auth di sini

const express = require("express");
const router = express.Router();
const products = require("../data/products");

// GET /api/products -> Ambil seluruh data produk dalam format JSON
router.get("/products", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Data produk berhasil diambil",
    data: products,
  });
});

module.exports = router;
