import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import './SearchBar.css';

// Mock product data - replace this with your actual product data
const mockProducts = [
  { id: 1, name: 'iPhone 14 Pro', category: 'Electronics' },
  { id: 2, name: 'MacBook Air M2', category: 'Electronics' },
  { id: 3, name: 'Nike Air Max', category: 'Shoes' },
  { id: 4, name: 'Samsung Galaxy S23', category: 'Electronics' },
  { id: 5, name: 'Adidas Running Shoes', category: 'Shoes' },
  { id: 6, name: 'iPad Pro', category: 'Electronics' },
  { id: 7, name: 'Levi\'s 501 Jeans', category: 'Clothing' },
  { id: 8, name: 'Sony Headphones', category: 'Electronics' },
  // Add more products as needed
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);

  useEffect(() => {
    // Filter suggestions based on search term
    if (searchTerm.trim() === '') {
      setSuggestions([]);
      return;
    }

    const filtered = mockProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filtered);
    setIsOpen(true);
    setSelectedIndex(-1);
  }, [searchTerm]);

  useEffect(() => {
    // Close suggestions on click outside
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (suggestions.length === 0) return;

    // Arrow up
    if (e.keyCode === 38) {
      e.preventDefault();
      setSelectedIndex(prev => (prev <= 0 ? suggestions.length - 1 : prev - 1));
    }
    // Arrow down
    else if (e.keyCode === 40) {
      e.preventDefault();
      setSelectedIndex(prev => (prev >= suggestions.length - 1 ? 0 : prev + 1));
    }
    // Enter
    else if (e.keyCode === 13 && selectedIndex >= 0) {
      setSearchTerm(suggestions[selectedIndex].name);
      setIsOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setIsOpen(false);
    // You can add navigation or search trigger here
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
    setIsOpen(false);
  };

  return (
    <div className="search-container" ref={searchRef}>
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search products..."
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-button" onClick={clearSearch}>
            <FaTimes />
          </button>
        )}
      </div>

      {isOpen && suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map((suggestion, index) => (
            <div
              key={suggestion.id}
              className={`suggestion-item ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <FaSearch className="suggestion-icon" />
              <div className="suggestion-content">
                <div className="suggestion-name">{suggestion.name}</div>
                <div className="suggestion-category">{suggestion.category}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
