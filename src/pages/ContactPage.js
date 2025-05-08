// src/pages/ContactPage.js
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '30px 20px' }}>
      <h1 style={{ marginBottom: '20px', fontSize: '2.5rem', textAlign: 'center' }}>Contact Us</h1>
      
      {submitted ? (
        <div style={{
          padding: '20px',
          backgroundColor: '#c6f6d5',
          borderRadius: '8px',
          textAlign: 'center',
          marginTop: '20px'
        }}>
          <h3 style={{ marginBottom: '10px' }}>Thank You!</h3>
          <p>Your message has been sent. We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <>
          <p style={{ lineHeight: '1.6', marginBottom: '20px', textAlign: 'center' }}>
            Have questions about our treks or need assistance with booking? 
            Get in touch with our team, and we'll be happy to help!
          </p>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label 
                htmlFor="name" 
                style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #cbd5e0'
                }}
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #cbd5e0'
                }}
              />
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #cbd5e0',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>
            
            <button
              type="submit"
              style={{
                backgroundColor: '#4299e1',
                color: 'white',
                padding: '12px',
                borderRadius: '4px',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                marginTop: '10px'
              }}
            >
              Send Message
            </button>
          </form>
          
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.3rem' }}>Other Ways to Reach Us</h3>
           
            
            <p style={{ marginBottom: '5px' }}>📧 Email: btejanshu@gmail.com</p>
            <p style={{ marginBottom: '5px' }}>📞 Phone: +91-7877109642</p>
            <p>🏢 Bhandari Bhavn, CHinyali Saur, Uttarkahsi, UK</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactPage;