// data/products.js
// Data produk dummy Toko Sembako Ariesta
// Nanti di Sprint 2, data ini akan dipindah ke SQLite/PostgreSQL

const products = [
  {
    id: 1,
    name: "Beras Pandan Wangi 5kg",
    category: "sembako",
    price: 65000,
    stock: 20,
  },
  {
    id: 2,
    name: "Minyak Goreng Bimoli 2L",
    category: "sembako",
    price: 34000,
    stock: 15,
  },
  {
    id: 3,
    name: "Gula Pasir Gulaku 1kg",
    category: "sembako",
    price: 16000,
    stock: 30,
  },
  {
    id: 4,
    name: "Telur Ayam 1kg",
    category: "sembako",
    price: 28000,
    stock: 25,
  },
  {
    id: 5,
    name: "Sabun Mandi Lifebuoy",
    category: "kebutuhan-rumah-tangga",
    price: 4500,
    stock: 50,
  },
  {
    id: 6,
    name: "Deterjen Rinso 800gr",
    category: "kebutuhan-rumah-tangga",
    price: 15000,
    stock: 18,
  },
  {
    id: 7,
    name: "Kecap Manis ABC 600ml",
    category: "sembako",
    price: 21000,
    stock: 22,
  },
  {
    id: 8,
    name: "Tepung Terigu Segitiga Biru 1kg",
    category: "sembako",
    price: 12500,
    stock: 27,
  },
];

module.exports = products;
