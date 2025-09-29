import React from 'react';
import { Link } from 'react-router-dom';
import './PromoSection.css';

const promos = [
  {
    id: 1,
    title: 'Summer Sale',
    description: 'Up to 50% off on summer collection',
    code: 'SUMMER50',
    expiryDate: '2025-12-31',
    image: '/images/summer-sale.jpg',
    backgroundColor: '#fef3c7'
  },
  {
    id: 2,
    title: 'New Customer Special',
    description: 'Get 20% off on your first purchase',
    code: 'WELCOME20',
    expiryDate: '2025-12-31',
    image: '/images/new-customer.jpg',
    backgroundColor: '#dbeafe'
  }
];

const PromoCard = ({ promo }) => {
  return (
    <div className="promo-card" style={{ backgroundColor: promo.backgroundColor }}>
      <div className="promo-content">
        <h3>{promo.title}</h3>
        <p>{promo.description}</p>
        <div className="promo-code">
          <span>Use code:</span>
          <code>{promo.code}</code>
        </div>
        <small>Valid until {new Date(promo.expiryDate).toLocaleDateString()}</small>
        <Link to="/shop" className="shop-now-btn">Shop Now</Link>
      </div>
      <div className="promo-image">
        <img src={promo.image} alt={promo.title} />
      </div>
    </div>
  );
};

const PromoSection = () => {
  return (
    <section className="promo-section">
      <h2>Special Offers</h2>
      <div className="promo-grid">
        {promos.map(promo => (
          <PromoCard key={promo.id} promo={promo} />
        ))}
      </div>
    </section>
  );
};

export default PromoSection;