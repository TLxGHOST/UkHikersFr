// src/pages/AboutPage.js
import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '30px 20px' }}>
      <h1 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>About UkHiker</h1>
      
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ marginBottom: '15px', fontSize: '1.8rem' }}>Our Mission</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
          UkHiker was founded with a simple mission: to help people explore the breathtaking landscapes 
          of the United Kingdom through organized treks and hiking experiences. We believe that nature 
          is one of the greatest gifts we have, and we want to make it accessible to everyone.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          Our team consists of experienced hikers and outdoor enthusiasts who have spent years 
          exploring the hills, mountains, and countryside of the UK. We've curated the best routes 
          and experiences so you can focus on enjoying the journey.
        </p>
      </section>
      
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ marginBottom: '15px', fontSize: '1.8rem' }}>What We Offer</h2>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
          <li style={{ marginBottom: '10px' }}>Guided hikes through stunning landscapes</li>
          <li style={{ marginBottom: '10px' }}>Treks suitable for all skill levels, from beginners to advanced hikers</li>
          <li style={{ marginBottom: '10px' }}>Small group experiences for a more personalized journey</li>
          <li style={{ marginBottom: '10px' }}>Expert guides with deep knowledge of local flora, fauna, and history</li>
          <li>Convenient online booking with detailed trek information</li>
        </ul>
      </section>
      
      <section>
        <h2 style={{ marginBottom: '15px', fontSize: '1.8rem' }}>Our Commitment</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
          We are committed to responsible tourism and preserving the natural beauty of the areas we 
          visit. Our guides follow strict "leave no trace" principles, and we contribute a portion of 
          our proceeds to conservation efforts across the UK.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          Join us on an adventure through the diverse and stunning landscapes that the UK has to offer. 
          Whether you're looking for a challenging mountain climb or a peaceful walk through lush 
          valleys, UkHiker has the perfect trek for you.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;