import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span>Subbulaxmy</span></h1>
        <p className="hero-subtitle">Aspiring AI & Data Science Developer</p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="hero-button">Download Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;