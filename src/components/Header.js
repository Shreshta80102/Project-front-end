import React from 'react';
import './Header.css';

function Header() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="site-title" onClick={(e) => handleNavClick(e, 'home')} style={{ cursor: 'pointer' }}>
          Indian Cultural Journey
        </h1>
        <nav className="navigation">
          <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#journeys" className="nav-link" onClick={(e) => handleNavClick(e, 'journeys')}>Journeys</a>
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

