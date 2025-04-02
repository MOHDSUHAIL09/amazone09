import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`) // ✅ Corrected API URL
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  const addToCart = (product) => {
    setWishlist([...wishlist, product]);
    alert(`${product.title} added to wishlist!`);
  };


  if (!product) {
    return <p>Product not found!</p>; 
  }

  return (
    <div className="product-details-container">
      <button className="left-back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="product-card-detail">
        <img
          src={product.thumbnail} // ✅ Corrected image property
          alt={product.title}
          className="product-image-detail"
        />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="category">Category: {product.category}</p>
          <p className="description">{product.description}</p>
          <p className="price">$ {product.price.toFixed(2)}</p>
          <p className="rating">
            ⭐⭐⭐⭐⭐ ({product.rating} reviews)
            <button className="cart" onClick={() => addToCart(product)}>🛒 Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
}
