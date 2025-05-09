// src/components/SignupModal.js
import React from 'react';
import './Modal.css';

const SignupModal = ({ onClose, onLoginClick }) => {
  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here (e.g., API call)
    onClose(); // Close modal after signup
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{' '}
          <button className="modal-switch" onClick={onLoginClick}>
            Log In
          </button>
        </p>
        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default SignupModal;
