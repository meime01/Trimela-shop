import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const mockProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    image: "/images/headphones.jpg",
    discount: 20,
    rating: 4.5,
    isNew: true,
    isFavorite: false
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 199.99,
    image: "/images/smartwatch.jpg",
    discount: 0,
    rating: 4.8,
    isNew: true,
    isFavorite: true
  }
];

const ProductGrid = ({ 
  products = mockProducts,
  isLoading = false,
  error = null 
}) => {
  if (isLoading) {
    return <div className="loading-state">Loading products...</div>;
  }

  if (error) {
    return <div className="error-state">Error: {error}</div>;
  }

  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;