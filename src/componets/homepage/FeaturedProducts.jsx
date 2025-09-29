import React from 'react';
import './FeaturedProducts.css';

const mockProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: '/images/headphones.jpg',
    rating: 4.5,
    discount: 20
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: '/images/smartwatch.jpg',
    rating: 4.8,
    discount: 15
  },
  // Add more mock products as needed
];

const ProductCard = ({ product }) => {
  const discountedPrice = product.price * (1 - product.discount / 100);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.discount > 0 && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="price-container">
          <span className="current-price">${discountedPrice.toFixed(2)}</span>
          {product.discount > 0 && (
            <span className="original-price">${product.price.toFixed(2)}</span>
          )}
        </div>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={index < Math.floor(product.rating) ? 'star filled' : 'star'}>
              ★
            </span>
          ))}
          <span className="rating-number">({product.rating})</span>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;