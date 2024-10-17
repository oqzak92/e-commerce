import React, { useState } from 'react';
import './App.css';  
import ProductCard from './composant/ProductCard';
import Navbar from './composant/NavBar';
import Panier from './composant/Panier';

const App = () => {
  const [cartItems, setCartItems] = useState([]);  // LE panier
  const [isCartOpen, setIsCartOpen] = useState(false);  // GERER LE PANIER

  const ProductZak = {
    name: 'Zakariya',
    description: 'BEAU BG ',
    price: 30,
    image: '1.png',  
  };

  const ProductYouness = {
    name: 'Youness',
    description: 'MOCHE VRAIMENT MOCHE',
    price: 20,
    image: '2.png',  
  };

  const ProductSonia = {
    name: 'Sonia',
    description: 'CA VA CA PASSE',
    price: 50,
    image: '3.png',  
  };

    const ProducKoman = {
    name: 'Koman',
    description: 'OH Koman cest comment ?',
    price: 70,
    image: '4.png',  
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Fonction pour ouvrir/fermer le panier
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Navbar cartItems={cartItems} toggleCart={toggleCart} />  {/* Transmet le panier à la barre de navigation */}
      <div className="app-container">
        <h1>Sold Shoes</h1>
        <div className="product-list">
          <ProductCard product={ProductZak} addToCart={addToCart} />
          <ProductCard product={ProductYouness} addToCart={addToCart} />
          <ProductCard product={ProductSonia} addToCart={addToCart} />
          <ProductCard product={ProducKoman} addToCart={addToCart} />
        </div>
      </div>
      <Panier cartItems={cartItems} isOpen={isCartOpen} />  {/* Affiche le panier en fonction de isOpen */}
    </div>
  );
};

export default App;
