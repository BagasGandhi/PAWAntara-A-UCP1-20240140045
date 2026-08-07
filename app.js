// app.js
// Entry point server Express - Toko Sembako Ariesta

const express = require("express");
const path = require("path");

const requestLogger = require("./middleware/logger");
const pageRoutes = require("./routes/pages");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

// ---- View Engine Setup ----
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ---- Middleware ----
app.use(express.json()); // parsing body JSON (dipakai di Sprint 2 nanti)
app.use(express.urlencoded({ extended: true })); // parsing form-urlencoded
app.use(requestLogger); // custom logger middleware, jalan di semua request

// ---- Static Files ----
app.use(express.static(path.join(__dirname, "public")));

// ---- Routes ----
app.use("/", pageRoutes); // halaman: /, /produk, /produk/:id, /tanya-ai
app.use("/api", apiRoutes); // REST API: /api/products

// ---- 404 handler (kalau route tidak ada sama sekali) ----
app.use((req, res) => {
  res.status(404).send("404 - Halaman tidak ditemukan");
});

// ---- Start Server ----
app.listen(PORT, () => {
  console.log(`Server Toko Sembako Ariesta berjalan di http://localhost:${PORT}`);
});
