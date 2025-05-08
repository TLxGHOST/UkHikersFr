import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://ukhikersba.onrender.com')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage("Failed to fetch from backend"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Trek Booking Platform</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
