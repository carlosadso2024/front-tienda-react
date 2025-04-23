import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre Nosotros</h3>
          <p>Tu tienda de confianza para encontrar los mejores productos.</p>
        </div>

        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/products">Productos</Link></li>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Categorías</h3>
          <ul>
            <li><Link to="/products?category=electronics">Electrónica</Link></li>
            <li><Link to="/products?category=computers">Computadoras</Link></li>
            <li><Link to="/products?category=accessories">Accesorios</Link></li>
            <li><Link to="/products?category=phones">Teléfonos</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@mitienda.com</p>
          <p>Teléfono: (123) 456-7890</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Mi Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;