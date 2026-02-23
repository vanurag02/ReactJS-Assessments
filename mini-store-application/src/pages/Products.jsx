import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { allProducts } from "../data/products";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Products";
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="container d-flex flex-wrap justify-content-start mt-5">
      {allProducts.map((prod) => (
        <ProductCard key={prod.id} product={prod} addToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default Products;
