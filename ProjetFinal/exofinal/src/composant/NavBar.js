
import React from 'react';
import './css/NavBar.css';

const Navbar = ({ cartItems, toggleCart }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">My Shop</h1>
      <ul className="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="cart" onClick={toggleCart}>
       <img src="/panier.png" alt="Cart" className="cart-icon" />
        <span className="cart-count">{cartItems.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
