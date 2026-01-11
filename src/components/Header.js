import React from 'react';
import './Header.css';

const Header = ({ user }) => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-icon">🚀</span>
          <span className="logo-text">AI Investment Pro</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search stocks, crypto, news..." />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      <div className="header-right">
        <span className="notification-icon">🔔</span>
        <div className="user-profile">
          <div className="user-avatar">{user?.name?.charAt(0) || 'U'}</div>
          <div className="user-info">
            <div className="user-name">{user?.name || 'User'}</div>
            <div className="user-status">Premium ⭐</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
