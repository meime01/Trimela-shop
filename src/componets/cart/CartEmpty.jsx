import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './CartEmpty.css';

const CartEmpty = () => {
  return (
    <div className="empty-cart">
      <FaShoppingCart className="empty-cart-icon" />
      <h2>Your cart is empty</h2>
      <p>Looks like you haven't added any items to your cart yet.</p>
      <Link to="/products" className="btn">
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartEmpty;