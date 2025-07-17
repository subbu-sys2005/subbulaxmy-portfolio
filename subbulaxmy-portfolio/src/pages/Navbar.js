import React from 'react';
import '../styles/FormStyles.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Logged out 💫');
    navigate('/login');
  };

  return (
    <div style={{
      width: '100%',
      padding: '10px 20px',
      background: 'linear-gradient(to right, #aee9ff, #ffc1e3)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    }}>
      <h2 style={{ color: '#fff', textShadow: '1px 1px 3px #ff69b4' }}>Fullstack Glow 🌸</h2>
      <button onClick={handleLogout} style={{
        padding: '8px 16px',
        background: 'white',
        color: '#ff69b4',
        fontWeight: 'bold',
        borderRadius: '8px',
        border: 'none',
        boxShadow: '0 0 10px rgba(173, 216, 230, 0.5)',
        cursor: 'pointer'
      }}>Logout</button>
    </div>
  );
};

export default Navbar;
