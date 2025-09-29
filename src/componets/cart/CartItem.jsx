import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../../context/cart_context';
import formatPrice from '../../utils/helpers';

const CartItem = ({ id, image, name, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, 'increase');
  };

  const decrease = () => {
    toggleAmount(id, 'decrease');
  };

  return (
    <article className="cart-item">
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <div className="amount-btns">
        <button type="button" className="amount-btn" onClick={decrease}>
          -
        </button>
        <h2 className="amount">{amount}</h2>
        <button type="button" className="amount-btn" onClick={increase}>
          +
        </button>
      </div>
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </article>
  );
};

export default CartItem;