import React, { useEffect, useState } from 'react';
import API from '../api';
import TrekCard from './TrekCard';

const TreksList = () => {
  const [treks, setTreks] = useState([]);

  useEffect(() => {
    const fetchTreks = async () => {
      try {
        const res = await API.get('/treks');
        setTreks(res.data);
      } catch (err) {
        console.error('Error fetching treks:', err);
      }
    };

    fetchTreks();
  }, []);

  return (
    <div>
      <h2>Available Treks</h2>
      <div className="trek-grid">
        {treks.map(trek => (
          <TrekCard key={trek._id} trek={trek} />
        ))}
      </div>
    </div>
  );
};

export default TreksList;
