// ALL PRODUCTS
const allProducts = [
  // PHONES
  {
    id: 1,
    image: "./assets/iphone-15.jpg",
    name: "iPhone 15",
    price: "₹79,900",
    rating: 4.8,
  },
  {
    id: 2,
    image: "./assets/galaxy-s23.jpg",
    name: "Samsung Galaxy S23",
    price: "₹74,999",
    rating: 4.6,
  },
  {
    id: 3,
    image: "./assets/oneplus-12.jpg",
    name: "OnePlus 12",
    price: "₹64,999",
    rating: 4.5,
  },
  {
    id: 4,
    image: "./assets/pixel-8.jpg",
    name: "Google Pixel 8",
    price: "₹75,999",
    rating: 4.7,
  },
  {
    id: 5,
    image: "./assets/iqoo-neo-9-pro.jpg",
    name: "iQOO Neo 9 Pro",
    price: "₹39,999",
    rating: 4.4,
  },
  {
    id: 6,
    image: "./assets/redmi-note-13-pro-plus.jpg",
    name: "Redmi Note 13 Pro+",
    price: "₹31,999",
    rating: 4.3,
  },

  // SHOES
  {
    id: 7,
    image: "./assets/nike-air-zoom-pegasus.jpg",
    name: "Nike Air Zoom Pegasus",
    price: "₹9,999",
    rating: 4.6,
  },
  {
    id: 8,
    image: "./assets/addidas-ultraboost.jpg",
    name: "Adidas Ultraboost",
    price: "₹14,999",
    rating: 4.7,
  },
  {
    id: 9,
    image: "./assets/puma-velocity-nitro.jpg",
    name: "Puma Velocity Nitro",
    price: "₹8,499",
    rating: 4.4,
  },
  {
    id: 10,
    image: "./assets/reebok-nano-x3.jpg",
    name: "Reebok Nano X3",
    price: "₹10,999",
    rating: 4.5,
  },
  {
    id: 11,
    image: "./assets/sketchers-go-walk.jpg",
    name: "Skechers Go Walk",
    price: "₹6,999",
    rating: 4.3,
  },
  {
    id: 12,
    image: "./assets/asics-gel-kayano.jpg",
    name: "Asics Gel-Kayano",
    price: "₹12,999",
    rating: 4.6,
  },

  // WATCHES
  {
    id: 13,
    image: "./assets/apple-watch-9.jpg",
    name: "Apple Watch Series 9",
    price: "₹41,900",
    rating: 4.8,
  },
  {
    id: 14,
    image: "./assets/galaxy-watch-6.jpg",
    name: "Samsung Galaxy Watch 6",
    price: "₹29,999",
    rating: 4.6,
  },
  {
    id: 15,
    image: "./assets/fossil-gen-6.jpg",
    name: "Fossil Gen 6",
    price: "₹22,995",
    rating: 4.4,
  },
  {
    id: 16,
    image: "./assets/titan-edge.jpg",
    name: "Titan Edge",
    price: "₹18,999",
    rating: 4.5,
  },
  {
    id: 17,
    image: "./assets/casio-g-shock.jpg",
    name: "Casio G-Shock GA-2100",
    price: "₹8,495",
    rating: 4.7,
  },
  {
    id: 18,
    image: "./assets/noise-colorfit-pro-4-alpha.jpg",
    name: "Noise ColorFit Pro 4 Alpha",
    price: "₹3,499",
    rating: 4.2,
  },

  // CLOTHES
  {
    id: 19,
    image: "./assets/levis-slim-fit-jeans.jpg",
    name: "Levi's Slim Fit Jeans",
    price: "₹3,499",
    rating: 4.5,
  },
  {
    id: 20,
    image: "./assets/nike-sports-jersey.jpg",
    name: "Nike Sports Jersey",
    price: "₹1,499",
    rating: 4.4,
  },
  {
    id: 21,
    image: "./assets/addidas-hoddie.jpg",
    name: "Addidas Hoodie",
    price: "₹3,999",
    rating: 4.6,
  },
  {
    id: 22,
    image: "./assets/zara-casual-shirts.jpg",
    name: "Zara Casual Shirt",
    price: "₹2,999",
    rating: 4.3,
  },
  {
    id: 23,
    image: "./assets/h-and-m-jackets.jpg",
    name: "H&M Jackets",
    price: "₹4,499",
    rating: 4.4,
  },
  {
    id: 24,
    image: "./assets/nike-joggers-pants.jpg",
    name: "Nike Joggers Pants",
    price: "₹2,499",
    rating: 4.2,
  },
];

const phones = [
  {
    id: 1,
    image: "./assets/iphone-15.jpg",
    name: "iPhone 15",
    price: "₹79,900",
    rating: 4.8,
  },
  {
    id: 2,
    image: "./assets/galaxy-s23.jpg",
    name: "Samsung Galaxy S23",
    price: "₹74,999",
    rating: 4.6,
  },
  {
    id: 3,
    image: "./assets/oneplus-12.jpg",
    name: "OnePlus 12",
    price: "₹64,999",
    rating: 4.5,
  },
  {
    id: 4,
    image: "./assets/pixel-8.jpg",
    name: "Google Pixel 8",
    price: "₹75,999",
    rating: 4.7,
  },
  {
    id: 5,
    image: "./assets/iqoo-neo-9-pro.jpg",
    name: "iQOO Neo 9 Pro",
    price: "₹39,999",
    rating: 4.4,
  },
  {
    id: 6,
    image: "./assets/redmi-note-13-pro-plus.jpg",
    name: "Redmi Note 13 Pro+",
    price: "₹31,999",
    rating: 4.3,
  },
];

const shoes = [
  {
    id: 7,
    image: "./assets/nike-air-zoom-pegasus.jpg",
    name: "Nike Air Zoom Pegasus",
    price: "₹9,999",
    rating: 4.6,
  },
  {
    id: 8,
    image: "./assets/addidas-ultraboost.jpg",
    name: "Adidas Ultraboost",
    price: "₹14,999",
    rating: 4.7,
  },
  {
    id: 9,
    image: "./assets/puma-velocity-nitro.jpg",
    name: "Puma Velocity Nitro",
    price: "₹8,499",
    rating: 4.4,
  },
  {
    id: 10,
    image: "./assets/reebok-nano-x3.jpg",
    name: "Reebok Nano X3",
    price: "₹10,999",
    rating: 4.5,
  },
  {
    id: 11,
    image: "./assets/sketchers-go-walk.jpg",
    name: "Skechers Go Walk",
    price: "₹6,999",
    rating: 4.3,
  },
  {
    id: 12,
    image: "./assets/asics-gel-kayano.jpg",
    name: "Asics Gel-Kayano",
    price: "₹12,999",
    rating: 4.6,
  },
];

const watches = [
  {
    id: 13,
    image: "./assets/apple-watch-9.jpg",
    name: "Apple Watch Series 9",
    price: "₹41,900",
    rating: 4.8,
  },
  {
    id: 14,
    image: "./assets/galaxy-watch-6.jpg",
    name: "Samsung Galaxy Watch 6",
    price: "₹29,999",
    rating: 4.6,
  },
  {
    id: 15,
    image: "./assets/fossil-gen-6.jpg",
    name: "Fossil Gen 6",
    price: "₹22,995",
    rating: 4.4,
  },
  {
    id: 16,
    image: "./assets/titan-edge.jpg",
    name: "Titan Edge",
    price: "₹18,999",
    rating: 4.5,
  },
  {
    id: 17,
    image: "./assets/casio-g-shock.jpg",
    name: "Casio G-Shock GA-2100",
    price: "₹8,495",
    rating: 4.7,
  },
  {
    id: 18,
    image: "./assets/noise-colorfit-pro-4-alpha.jpg",
    name: "Noise ColorFit Pro 4 Alpha",
    price: "₹3,499",
    rating: 4.2,
  },
];

const clothes = [
  {
    id: 19,
    image: "./assets/levis-slim-fit-jeans.jpg",
    name: "Levi's Slim Fit Jeans",
    price: "₹3,499",
    rating: 4.5,
  },
  {
    id: 20,
    image: "./assets/nike-sports-jersey.jpg",
    name: "Nike Sports Jersey",
    price: "₹1,499",
    rating: 4.4,
  },
  {
    id: 21,
    image: "./assets/addidas-hoddie.jpg",
    name: "Addidas Hoodie",
    price: "₹3,999",
    rating: 4.6,
  },
  {
    id: 22,
    image: "./assets/zara-casual-shirts.jpg",
    name: "Zara Casual Shirt",
    price: "₹2,999",
    rating: 4.3,
  },
  {
    id: 23,
    image: "./assets/h-and-m-jackets.jpg",
    name: "H&M Jackets",
    price: "₹4,499",
    rating: 4.4,
  },
  {
    id: 24,
    image: "./assets/nike-joggers-pants.jpg",
    name: "Nike Joggers Pants",
    price: "₹2,499",
    rating: 4.2,
  },
];

export { allProducts, phones, shoes, watches, clothes };
