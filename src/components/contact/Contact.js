import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Let's Work Together</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-description">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">linkedin</span>
                <span>Connect on LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">github</span>
                <span>Check out my GitHub</span>
              </a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone (Optional)"
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="form-input"
              />
            </div>
            
            <button type="submit" className="send-button">
              <span>Send Message</span>
              <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
