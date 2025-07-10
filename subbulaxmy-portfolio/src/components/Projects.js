// Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <div className="project-image">📊</div>
            <h3>Medix Lens</h3>
            <p>Built using React.js + AI + Healthcare</p>
          </div>

          <div className="project-card">
            <div className="project-image">🤖</div>
            <h3>Tesla Coil – Project Expo</h3>
            <p>Built using Electronics  + Innovation + Teamwork</p>
          </div>

          <div className="project-card">
            <div className="project-image">📈</div>
            <h3>Water Scarcity Predictor</h3>
            <p>Built using Python + Machine Learning + Data Science</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
