import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category}</p>
        <button className="add-to-cart-btn">Añadir al carrito</button>
      </div>
    </div>
  );
}

export default ProductCard;