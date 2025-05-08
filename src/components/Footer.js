// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
      <p style={styles.copyright}>
  © {new Date().getFullYear()} Developed by{' '}
  <a href="https://github.com/TLxGHOST" style={{ color: 'red' }}>
  TLxGHOST
  </a>. All rights reserved by Founder <a href="https://www.instagram.com/ukhikers/" style={{ color: 'red' }}>
  DEEPANSHU BHARTWAL 
  </a>.
</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2d3748',
    padding: '20px 0',
    marginTop: 'auto'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center'
  },
  copyright: {
    color: 'white',
    margin: 0
  }
};

export default Footer;