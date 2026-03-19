import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Tech from './components/tech/Tech';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './global-styles/App.css';
import './global-styles/index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Projects />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
