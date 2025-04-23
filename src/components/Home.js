import React from 'react';
import './Home.css';

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Producto 1",
      price: 99.99,
      image: "url-imagen-1"
    },
    // Añade más productos
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
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button>Añadir al carrito</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;