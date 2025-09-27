import React, { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import SearchBar from './SearchBar';
import './navbar.css';

const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <h1>Trimela Shoppers</h1>
        </div>
        <SearchBar />
      </div>
      
      <div className="navbar-right">
        <div className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count">0</span>
        </div>
        
        <div className="user-menu">
          <div 
            className="user-icon" 
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <FaUser />
          </div>
          {showUserMenu && (
            <div className="dropdown-menu">
              <ul>
                <li>Profile</li>
                <li>Orders</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
