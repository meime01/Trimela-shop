import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

const categories = [
  {
    id: 1,
    name: 'Jewelry',
    image: '/images/jewelry.jpg',
    itemCount: 150,
    description: 'Elegant jewelry pieces for every occasion'
  },
  {
    id: 2,
    name: 'Bags',
    image: '/images/bags.jpg',
    itemCount: 120,
    description: 'Stylish bags and accessories'
  },
  {
    id: 3,
    name: 'Electronics',
    image: '/images/electronics.jpg',
    itemCount: 200,
    description: 'Latest gadgets and devices'
  },
  {
    id: 4,
    name: 'Fashion',
    image: '/images/fashion.jpg',
    itemCount: 300,
    description: 'Trendy clothing and accessories'
  }
];

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.name.toLowerCase()}`} className="category-card">
      <div className="category-image">
        <img src={category.image} alt={category.name} />
      </div>
      <div className="category-content">
        <h3>{category.name}</h3>
        <p className="category-description">{category.description}</p>
        <span className="item-count">{category.itemCount} items</span>
      </div>
    </Link>
  );
};

const CategoryGrid = () => {
  return (
    <section className="categories-section">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;