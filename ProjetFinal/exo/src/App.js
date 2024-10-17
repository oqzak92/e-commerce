import React from 'react';
import './App.css';  // Importer les styles de flexbox
import ProductCard from './composant/ProductCard';
import Navbar from './composant/NavBar'; // Assure-toi que le chemin et le nom correspondent exactement


const App = () => {

  const ProductZak = {
    name: 'Zakariya',
    description: 'A high-end sports car with sleek design and powerful engine.',
    price: 99999,
    image: './1.png',  
  };

  const ProductYouness = {
    name: 'Youness',
    description: 'A high-end sports car with sleek design and powerful engine.',
    price: 99999,
    image: '1.png',  
  };

  const ProductSonia = {
    name: 'Sonia',
    description: 'A high-end sports car with sleek design and powerful engine.',
    price: 99999,
    image: '1.png',  
  };

  return (
    <div>
      <Navbar />  {/* Afficher la barre de navigation */}
      <div className="app-container">
        <h1>Sold human</h1>
        <div className="product-list">
          <ProductCard product={ProductZak} />
          <ProductCard product={ProductYouness} />
          <ProductCard product={ProductSonia} />
        </div>
      </div>
    </div>
  );
};

export default App;
