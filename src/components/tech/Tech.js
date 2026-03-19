import React from 'react';
import './Tech.css';

const Tech = () => {
  const technologies = [
    { name: 'Java', icon: '☕' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'CSS', icon: '🎨' },
    { name: 'React', icon: '⚛️' }
  ];

  const languages = [
    { name: 'English', level: 'Fluent', flag: '' },
    { name: 'Spanish', level: 'Intermediate', flag: '' },
    { name: 'Portuguese', level: 'Native', flag: '' }
  ];

  return (
    <section className="tech" id="tech">
      <div className="tech-container">
        <h2 className="tech-title">Skills and Technologies</h2>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div className="tech-card" key={index}>
              <div className="tech-icon">{tech.icon}</div>
              <h3 className="tech-name">{tech.name}</h3>
            </div>
          ))}
        </div>
        
        <h3 className="tech-languages-title">Languages</h3>
        <div className="languages-grid">
          {languages.map((language, index) => (
            <div className="language-card" key={index}>
              <div className="language-flag">{language.flag}</div>
              <h4 className="language-name">{language.name}</h4>
              <p className="language-level">{language.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
