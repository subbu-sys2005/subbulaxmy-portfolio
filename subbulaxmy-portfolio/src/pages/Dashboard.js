import React from 'react';
import '../styles/FormStyles.css';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2 className="form-title">Welcome to Your Dashboard 🌸</h2>
        <div className="glow-form">
          <p style={{ fontSize: '18px', color: '#333', textAlign: 'center' }}>
            You are now logged in. Feel the glow of sky blue & baby pink harmony!
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;