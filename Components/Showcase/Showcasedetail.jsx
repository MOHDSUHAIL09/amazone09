import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import './Showcasedetail.css'
export default function Showcasedetail() {

  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading , setloading] =  useState(true)
  
useEffect(() =>{
  fetch(`https://dummyjson.com/products/${id}`)
  .then((res) => res.json())
  .then((data) => {
    setProduct(data)
    setloading(false)
    console.log("API Response:", data);  // ✅ सही है
  })

  .catch((err) => console.error("Error fetching product details:", err));
},[id]);


if (loading) {
  return <p>Loading...</p>;
}

if (!product) {
  return <p>Error: Product not found!</p>;
}




  return (
   <div className='showcase-detials'>
   <img src={product.thumbnail} alt={product.title} className='image-details' />
    <h2 className='title-detils'>{product.title}</h2>
    <h4 className='description-details'>{product.description}</h4>
    <p className="updated-product-price"> ${product.price} <span className="updated-old-price">${(product.price + 10).toFixed(2)}</span></p>
   </div>
  )
}




