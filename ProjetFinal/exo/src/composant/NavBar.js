import React from 'react';
import './css/NavBar.css'; // Assurez-vous que le chemin est correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Mon Logo</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">À Propos</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
