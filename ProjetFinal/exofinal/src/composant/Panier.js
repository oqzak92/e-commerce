import React from 'react';
import './css/Panier.css';

const Panier = ({ cartItems, isOpen }) => {
  if (!isOpen) return null;  

  
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="panier-popup">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total:</strong> ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Panier;
