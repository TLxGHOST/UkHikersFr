// src/pages/TrekDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const TrekDetails = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const showBookingForm = searchParams.get('book') === 'true';
  
  const [trek, setTrek] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  useEffect(() => {
    const fetchTrekDetails = async () => {
      try {
        const response = await fetch(`https://ukhikersba.onrender.com/api/treks/${id}`);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        setTrek(data);
      } catch (err) {
        console.error('Failed to fetch trek details:', err);
        setError('Failed to load trek details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrekDetails();
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    // In a real app, this would send data to backend
    setTimeout(() => {
      setBookingSubmitted(true);
    }, 1000);
  };

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

  if (!trek) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Trek Not Found</h2>
        <p>The trek you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="trek-details-container">
      <div className="trek-details-header">
        <h1>{trek.title}</h1>
        <p>📍 {trek.location}</p>
      </div>
      
      <div className="trek-details-content">
        <div className="trek-details-main">
          <img 
            src={trek.imageUrl || 'https://via.placeholder.com/800x500?text=No+Image'} 
            alt={trek.title} 
          />
          <div className="trek-details-description">
            <h2>Description</h2>
            <p>{trek.description || 'No description available for this trek.'}</p>
          </div>
        </div>
        
        <div className="trek-details-sidebar">
          <div className="trek-details-price">
            £{trek.price?.toFixed(2) || '0.00'}
          </div>
          
          <div className="trek-details-info">
            <div>
              <span>Difficulty:</span>
              <span>{trek.difficulty || 'Not specified'}</span>
            </div>
            <div>
              <span>Date:</span>
              <span>{trek.date ? new Date(trek.date).toLocaleDateString() : 'Flexible'}</span>
            </div>
          </div>
          
          {bookingSubmitted ? (
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#c6f6d5', borderRadius: '8px' }}>
              <h3>Booking Received!</h3>
              <p>Thank you for your booking. We will contact you shortly with confirmation details.</p>
            </div>
          ) : (
            <div className="booking-form">
              <h3>Book This Trek</h3>
              <form onSubmit={handleBooking}>
                <button type="submit">Book Now</button>
              </form>
              <p style={{ fontSize: '0.8rem', marginTop: '10px', textAlign: 'center' }}>
                * Payment functionality coming soon
              </p>
            </div>
          )}
          
          {trek.pdfUrl && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <a 
                href={trek.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 15px',
                  backgroundColor: '#e2e8f0',
                  color: '#2d3748',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                Download Trek Details (PDF)
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrekDetails;
