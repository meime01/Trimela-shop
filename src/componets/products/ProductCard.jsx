import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    price,
    image,
    discount,
    rating,
    isNew,
    isFavorite
  } = product;

  const discountedPrice = discount 
    ? (price - (price * discount / 100)).toFixed(2)
    : price.toFixed(2);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
        {discount > 0 && (
          <span className="discount-badge">-{discount}%</span>
        )}
        {isNew && <span className="new-badge">New</span>}
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          aria-label="Add to favorites"
        >
          <FaHeart />
        </button>
      </div>

      <div className="product-info">
        <Link to={`/product/${id}`} className="product-title">
          {title}
        </Link>
        
        <div className="price-container">
          <span className="current-price">${discountedPrice}</span>
          {discount > 0 && (
            <span className="original-price">${price.toFixed(2)}</span>
          )}
        </div>

        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span 
              key={index} 
              className={index < Math.floor(rating) ? 'star filled' : 'star'}
            >
              ★
            </span>
          ))}
          <span className="rating-count">({rating})</span>
        </div>

        <button className="add-to-cart-btn">
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;