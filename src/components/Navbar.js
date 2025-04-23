import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Mi Tienda</Link>
      </div>
      <div className="navbar-links">
        <Link to="/products">Productos</Link>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/register">Registrarse</Link>
      </div>
    </nav>
  );
}

export default Navbar;