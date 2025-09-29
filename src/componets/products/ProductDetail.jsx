import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaStar, FaShare } from 'react-icons/fa';
import './ProductDetail.css';

const mockProduct = {
  id: 1,
  name: 'Wireless Headphones',
  price: 99.99,
  discount: 20,
  rating: 4.5,
  reviewCount: 128,
  description: 'High-quality wireless headphones with noise cancellation...',
  images: [
    '/images/headphones-1.jpg',
    '/images/headphones-2.jpg',
    '/images/headphones-3.jpg',
  ],
  variants: {
    colors: ['Black', 'White', 'Blue'],
    sizes: ['One Size']
  },
  specs: [
    { label: 'Battery Life', value: '20 hours' },
    { label: 'Bluetooth', value: '5.0' },
    { label: 'Noise Cancellation', value: 'Active' }
  ]
};

const ProductDetail = ({ product = mockProduct }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.variants.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.variants.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const discountedPrice = product.discount 
    ? (product.price - (product.price * product.discount / 100)).toFixed(2)
    : product.price.toFixed(2);

  return (
    <div className="product-detail">
      <div className="product-gallery">
        <div className="main-image">
          <img src={product.images[selectedImage]} alt={product.name} />
        </div>
        <div className="thumbnail-list">
          {product.images.map((image, index) => (
            <button
              key={index}
              className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
              onClick={() => setSelectedImage(index)}
            >
              <img src={image} alt={`${product.name} view ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        
        <div className="price-section">
          <span className="current-price">${discountedPrice}</span>
          {product.discount > 0 && (
            <>
              <span className="original-price">${product.price.toFixed(2)}</span>
              <span className="discount-badge">-{product.discount}%</span>
            </>
          )}
        </div>

        <div className="rating-section">
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className={index < Math.floor(product.rating) ? 'filled' : ''} />
            ))}
          </div>
          <span className="rating-count">{product.reviewCount} reviews</span>
        </div>

        <div className="variants-section">
          {product.variants.colors.length > 0 && (
            <div className="color-options">
              <h3>Color</h3>
              <div className="option-buttons">
                {product.variants.colors.map(color => (
                  <button
                    key={color}
                    className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.variants.sizes.length > 0 && (
            <div className="size-options">
              <h3>Size</h3>
              <div className="option-buttons">
                {product.variants.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="quantity-section">
          <h3>Quantity</h3>
          <div className="quantity-selector">
            <button 
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
        </div>

        <div className="action-buttons">
          <button className="add-to-cart">
            <FaShoppingCart /> Add to Cart
          </button>
          <button className="wishlist">
            <FaHeart />
          </button>
          <button className="share">
            <FaShare />
          </button>
        </div>

        <div className="product-description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>

        <div className="product-specs">
          <h3>Specifications</h3>
          <ul>
            {product.specs.map(spec => (
              <li key={spec.label}>
                <span className="spec-label">{spec.label}:</span>
                <span className="spec-value">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;