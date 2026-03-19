import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="nav-logo">Portfolio</div>
        <nav>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#tech" className="nav-link">Tech</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/cindyjelinsky/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <span className="social-icon">linkedin</span>
          </a>
          <a href="https://github.com/cindyjelinsky" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <span className="social-icon">github</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
