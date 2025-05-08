// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import TrekCard from '../components/TrekCard';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage = () => {
  const [treks, setTreks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTreks = async () => {
      try {
        const response = await fetch('https://ukhikersba.onrender.com/api/treks');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        // Ensure data is an array before setting it
        setTreks(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Failed to fetch treks:', err);
        setError('Failed to load treks. Please try again later.');
        setTreks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTreks();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Oops!</h2>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4299e1',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  // If no treks are found but no error occurred
  if (treks.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>No Treks Available</h2>
        <p>There are currently no treks available for booking.</p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Discover Amazing UK Hikes</h1>
        <p style={{ fontSize: '1.1rem', color: '#718096', maxWidth: '700px', margin: '0 auto' }}>
          Explore the most beautiful landscapes of the United Kingdom with our carefully curated treks
        </p>
      </div>
      
      <div className="treks-container">
        {treks.map(trek => (
          <TrekCard key={trek._id} trek={trek} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;




