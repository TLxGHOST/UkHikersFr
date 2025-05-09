import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMountain, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Navbar = ({ user, setUser, cart }) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItemCount = cart?.items?.length || 0;

  const handleLoginSuccess = (user) => {
    setUser(user); // Update user state after successful login
  };

  const handleSignupSuccess = (user) => {
    setUser(user); // Update user state after successful signup
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <FaMountain style={{ marginRight: '8px' }} />
            Uk<span>Hiker</span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#4a5568',
              '@media (max-width: 768px)': {
                display: 'block'
              }
            }}
          >
            <span>☰</span>
          </button>

          {/* Navigation links */}
          <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/treks" className="navbar-link">Treks</Link>
            <Link to="/about" className="navbar-link">About</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
          </div>

          {/* Auth/User buttons */}
          <div className="navbar-auth">
            {user ? (
              <>
                <Link to="/cart" className="navbar-link">
                  <FaShoppingCart style={{ fontSize: '1.2rem' }} />
                  {cartItemCount > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '-5px',
                      right: '-5px',
                      background: '#E53E3E',
                      color: 'white',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      fontSize: '0.7rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {cartItemCount}
                    </span>
                  )}
                </Link>
                <Link to="/dashboard" className="navbar-link">
                  <FaUserCircle style={{ marginRight: '5px' }} />
                  {user.name || 'My Account'}
                </Link>
              </>
            ) : (
              <>
                <button 
                  className="btn-login" 
                  onClick={() => setLoginModalOpen(true)}
                >
                  Log In
                </button>
                <button 
                  className="btn-signup" 
                  onClick={() => setSignupModalOpen(true)}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {loginModalOpen && (
        <LoginModal 
          onClose={() => setLoginModalOpen(false)}
          onSignupClick={() => {
            setLoginModalOpen(false);
            setSignupModalOpen(true);
          }}
          onLoginSuccess={handleLoginSuccess} // Pass login success handler
        />
      )}

      {/* Signup Modal */}
      {signupModalOpen && (
        <SignupModal 
          onClose={() => setSignupModalOpen(false)} 
          onLoginClick={() => {
            setSignupModalOpen(false);
            setLoginModalOpen(true);
          }}
          onSignupSuccess={handleSignupSuccess} // Pass signup success handler
        />
      )}
    </>
  );
};

export default Navbar;
