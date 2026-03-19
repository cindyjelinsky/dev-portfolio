import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const siteMapLinks = [
    { href: '#home', text: 'Home' },
    { href: '#projects', text: 'Projects' },
    { href: '#tech', text: 'Technologies' },
    { href: '#contact', text: 'Contact' }
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/cindyjelinsky/', text: 'linkedin', label: 'LinkedIn' },
    { href: 'https://github.com/cindyjelinsky', text: 'github', label: 'GitHub' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <h3 className="footer-logo">Portfolio</h3>
              <p className="footer-description">
                Full Stack Developer crafting innovative digital experiences with modern technologies.
              </p>
            </div>
            
            <div className="footer-social">
              <h4 className="footer-heading">Connect</h4>
              <div className="footer-social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={social.label}
                  >
                    <span className="footer-social-icon">{social.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Site Map Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Navigate</h4>
            <ul className="footer-links">
              {siteMapLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="footer-contact">
              <p className="footer-contact-text">
                Ready to collaborate on your next project? Let's create something amazing together.
              </p>
              <a href="#contact" className="footer-contact-link">
                Send Message →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Cindy H.J. Developer. All rights reserved.
            </p>
            <p className="footer-credits">
              Built with React, CSS, and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
