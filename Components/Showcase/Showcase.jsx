import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./Showcase.css";

const API_URL = "https://dummyjson.com/products?limit=12";
const Categories = ["Hot Releases", "Deals & Outlets", "Top Selling", "Trendy"];

const Showcase = () => {  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const products = data.products;
        const categorizedData = {
          "Hot Releases": products.slice(0, 3),
          "Deals & Outlets": products.slice(3, 6),
          "Top Selling": products.slice(6, 9),
          "Trendy": products.slice(9, 12),
        };
        setData(categorizedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error fetching data</h1>;

  return (
    <div className="updated-container">
      {Categories.map((category) => (
        <div key={category} className="updated-category">
          <h2 className="updated-category-title">{category}</h2>
          <div className="updated-product-grid">
            {data[category]?.map((product) => (
              <div key={product.id} className="updated-product">
                <div className="product-img-container">
                  <img src={product.thumbnail} alt={product.title} className="product-img" />
                </div>
                <div className="updated-product-info">
                  <p className="updated-product-name">
                    {product.title.length > 10 ? product.title.substring(0, 10) + "..." : product.title}
                  </p>
                  <p className="updated-product-price">
                    ${product.price} <span className="updated-old-price">${(product.price + 10).toFixed(2)}</span>
                  </p>
                  <Link to={`/showcase/${product.id}`} className="view-details">View Details</Link>                
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
