import React, { useState } from 'react';
import axios from 'axios';
import '../styles/FormStyles.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      await axios.post('http://localhost:8085/login', formData);
      alert('Login success 💫');
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Login failed 💔');
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit} className="glow-form">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;