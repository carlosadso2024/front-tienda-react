import React, { useState } from 'react';
import ProductCard from './ProductCard';
import smartPhoneImage from '../assets/images/smartphone.jpg';
import laptopImage from '../assets/images/laptop.jpg';
import './Products.css';

function Products() {
  const [products] = useState([
    {
      id: 1,
      name: "Smartphone XYZ",
      price: 599.99,
      description: "Último modelo con cámara de alta resolución",
      image: smartPhoneImage,
      category: "Electrónica"
    },
    {
      id: 2,
      name: "Laptop Pro",
      price: 1299.99,
      description: "Potente laptop para profesionales",
      image: laptopImage,
      category: "Computadoras"
    },
    // Añade más productos aquí
  ]);

  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all'
  });

  const filterProducts = () => {
    return products.filter(product => {
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }
      // Añade más lógica de filtrado según necesites
      return true;
    });
  };

  return (
    <div className="products-page">
      <div className="filters-section">
        <h2>Filtros</h2>
        <select 
          value={filters.category} 
          onChange={(e) => setFilters({...filters, category: e.target.value})}
        >
          <option value="all">Todas las categorías</option>
          <option value="Electrónica">Electrónica</option>
          <option value="Computadoras">Computadoras</option>
          {/* Añade más categorías */}
        </select>

        <select 
          value={filters.priceRange}
          onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
        >
          <option value="all">Todos los precios</option>
          <option value="0-100">$0 - $100</option>
          <option value="101-500">$101 - $500</option>
          <option value="501+">$501+</option>
        </select>
      </div>

      <div className="products-grid">
        {filterProducts().map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;