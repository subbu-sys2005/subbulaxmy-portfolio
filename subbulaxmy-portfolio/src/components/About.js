// About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-card">
        <h2 className="about-title">About</h2>
        <p className="about-text">
          I'm <strong>Subbulaxmy</strong>, currently pursuing a degree in <em>Artificial Intelligence & Data Science</em>. I’m deeply passionate about emerging tech and love learning how to use Python, R, and SQL to solve real-world problems.  
        </p>
        <p className="about-text">
          Whether it’s participating in AI events, exploring data-driven solutions, or collaborating with others — I enjoy the process of growth through code.
        </p>
        <p className="about-quote">
          “The best way to predict the future is to build it.”  
        </p>
      </div>
    </section>
  );
}

export default About;
