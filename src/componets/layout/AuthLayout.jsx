import React from 'react';
import { Link } from 'react-router-dom';
import './AuthLayout.css';

const AuthLayout = ({ children, title }) => {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            Trimela Shoppers
          </Link>
        </div>
        <div className="auth-card">
          <h2 className="auth-title">{title}</h2>
          {children}
        </div>
        <div className="auth-footer">
          <p>&copy; {new Date().getFullYear()} Trimela Shoppers. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;