// Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>

        <div className="skills-category">
          <h3>Technical Skills</h3>
          <div className="skills-list">
            <span>Python</span>
            <span>SQL</span>
            <span>R</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>React.js</span>
            <span>Machine Learning</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Soft Skills</h3>
          <div className="skills-list">
            <span>Communication</span>
            <span>Teamwork</span>
            <span>Leadership</span>
            <span>Listening</span>
            <span>Problem Solving</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
