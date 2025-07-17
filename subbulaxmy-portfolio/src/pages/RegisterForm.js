import React, { useState } from 'react';
import axios from 'axios';
import '../styles/FormStyles.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    slot: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8085/register', formData);
      alert('Registered 💖');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Failed 💔');
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2 className="form-title">Register</h2>
        <form onSubmit={handleSubmit} className="glow-form">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="text" name="slot" placeholder="Slot (e.g. A1)" value={formData.slot} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
