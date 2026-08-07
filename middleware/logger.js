// middleware/logger.js
// Middleware custom sederhana buat nge-log setiap request yang masuk ke server

function requestLogger(req, res, next) {
  const now = new Date().toLocaleString("id-ID");
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next(); // lanjut ke middleware/route berikutnya
}

module.exports = requestLogger;
