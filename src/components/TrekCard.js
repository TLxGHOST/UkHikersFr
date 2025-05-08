// src/components/TrekCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const TrekCard = ({ trek }) => {
  const getDifficultyClass = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return 'easy';
      case 'moderate':
        return 'moderate';
      case 'hard':
        return 'hard';
      default:
        return 'moderate';
    }
  };

  return (
    <div className="trek-card">
      <img 
        src={trek.imageUrl } 
        alt={trek.title} 
        className="trek-image" 
      />
      <div className="trek-content">
        <h2 className="trek-title">{trek.title}</h2>
        <p className="trek-location">
          <span style={{ marginRight: '5px' }}>📍</span> {trek.location}
        </p>
        <span className={`trek-difficulty ${getDifficultyClass(trek.difficulty)}`}>
          {trek.difficulty || 'Moderate'}
        </span>
        <p className="trek-description">
          {trek.description?.substring(0, 100)}
          {trek.description?.length > 100 ? '...' : ''}
        </p>
        <p className="trek-price">£{trek.price?.toFixed(2) || '0.00'}</p>
        <div className="trek-actions">
          <Link to={`/trek/${trek._id}`} className="trek-details-btn">View Details</Link>
          <Link to={`/trek/${trek._id}?book=true`} className="trek-book-btn">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default TrekCard;