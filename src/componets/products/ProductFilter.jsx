import React, { useState } from 'react';
import { FaStar, FaChevronDown } from 'react-icons/fa';
import './ProductFilter.css';

const categories = [
  { id: 1, name: 'Jewelry', count: 150 },
  { id: 2, name: 'Bags', count: 120 },
  { id: 3, name: 'Electronics', count: 200 },
  { id: 4, name: 'Fashion', count: 300 }
];

const ProductFilter = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [expanded, setExpanded] = useState({
    price: true,
    category: true,
    rating: true
  });

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
    onFilterChange({ type: 'price', value: newRange });
  };

  const handleCategoryChange = (categoryId) => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    setSelectedCategories(newCategories);
    onFilterChange({ type: 'category', value: newCategories });
  };

  const handleRatingChange = (rating) => {
    setMinRating(rating);
    onFilterChange({ type: 'rating', value: rating });
  };

  const toggleSection = (section) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="product-filter">
      <h2>Filters</h2>

      {/* Price Filter */}
      <div className="filter-section">
        <div 
          className="filter-header" 
          onClick={() => toggleSection('price')}
        >
          <h3>Price Range</h3>
          <FaChevronDown className={expanded.price ? 'expanded' : ''} />
        </div>
        {expanded.price && (
          <div className="price-inputs">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              min="0"
              max={priceRange[1]}
            />
            <span>to</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              min={priceRange[0]}
            />
          </div>
        )}
      </div>

      {/* Category Filter */}
      <div className="filter-section">
        <div 
          className="filter-header" 
          onClick={() => toggleSection('category')}
        >
          <h3>Categories</h3>
          <FaChevronDown className={expanded.category ? 'expanded' : ''} />
        </div>
        {expanded.category && (
          <div className="category-list">
            {categories.map(category => (
              <label key={category.id} className="category-item">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                />
                <span>{category.name}</span>
                <span className="count">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="filter-section">
        <div 
          className="filter-header" 
          onClick={() => toggleSection('rating')}
        >
          <h3>Rating</h3>
          <FaChevronDown className={expanded.rating ? 'expanded' : ''} />
        </div>
        {expanded.rating && (
          <div className="rating-options">
            {[4, 3, 2, 1].map(rating => (
              <label key={rating} className="rating-item">
                <input
                  type="radio"
                  name="rating"
                  checked={minRating === rating}
                  onChange={() => handleRatingChange(rating)}
                />
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={index < rating ? 'filled' : ''}
                    />
                  ))}
                </div>
                <span>& Up</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;