import React from 'react';
import ProductCard from '../components/ProductCard';
import smartPhoneImage from '../assets/images/smartphone.jpg';
import './Home.css';

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Smartphone XYZ",
      price: 599.99,
      description: "Último modelo con cámara de alta resolución",
      image: smartPhoneImage,
      category: "Electrónica"
    }
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Bienvenido a Mi Tienda</h1>
        <p>Descubre nuestros productos destacados</p>
      </div>
      
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;