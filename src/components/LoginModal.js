// src/components/LoginModal.js
import React, { useState } from 'react';
import './Modal.css'; // Optional styling

const LoginModal = ({ onClose, onSignupClick, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('https://ukhikersba.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');

      // Save token and user to localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Let parent component know login was successful
      onLoginSuccess(data.user);
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit">Log In</button>
        </form>

        {error && <p className="modal-error">{error}</p>}

        <p>
          Don’t have an account?{' '}
          <button className="modal-switch" onClick={onSignupClick}>
            Sign Up
          </button>
        </p>
        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default LoginModal;
