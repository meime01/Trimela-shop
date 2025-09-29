import React from 'react';
import { useCartContext } from '../../context/cart_context';
import { useNavigate } from 'react-router-dom';
import formatPrice from '../../utils/helpers';
import './CartSummary.css';

const CartSummary = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const navigate = useNavigate();

  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>
      <div className="summary-item">
        <span>Subtotal</span>
        <span>{formatPrice(total_amount)}</span>
      </div>
      <div className="summary-item">
        <span>Shipping Fee</span>
        <span>{formatPrice(shipping_fee)}</span>
      </div>
      <hr />
      <div className="summary-item total">
        <span>Order Total</span>
        <span>{formatPrice(total_amount + shipping_fee)}</span>
      </div>
      <button 
        className="btn checkout-btn"
        onClick={() => navigate('/checkout')}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;