import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import TrekDetails from './pages/TrekDetails';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [serverStatus, setServerStatus] = useState('Checking connection...');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Add user state
// 
  useEffect(() => {
    // Check connection to backend
    fetch('https://ukhikersba.onrender.com')
      
      .then(res => res.text())
      .then(data => {
        setServerStatus('Server in your Service 😊😊 ');
        setLoading(false);
      })
      .catch(err => {
        console.error('Server connection error:', err);
        setServerStatus('Failed to connect to server. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar user={user} setUser={setUser} /> {/* Pass user and setUser to Navbar */}
        
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trek/:id" element={<TrekDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        <div className="server-status">
          {serverStatus}
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
