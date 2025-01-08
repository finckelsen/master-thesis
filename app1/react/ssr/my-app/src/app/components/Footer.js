import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h2>Email: <a href="mailto:casper@finckelsen.com">casper@finckelsen.com</a></h2>
        <a href="https://www.linkedin.com/in/casper-finckelsen/" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
      </div>
    </footer>
  );
}

export const dynamic = 'force-dynamic'; // Ensure dynamic behavior
export default Footer;
