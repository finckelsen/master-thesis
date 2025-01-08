"use client"

import React, { useState } from 'react';

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState('white'); // Initial background color

  const changeBackgroundColor = () => {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);

    // Change the body's background color
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Click the button to change background color</h2>
      <button
        onClick={changeBackgroundColor}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Change Background
      </button>
      <p style={{ marginTop: '10px' }}>
        Current Background Color: <strong>{bgColor}</strong>
      </p>
    </div>
  );
};

export default BackgroundChanger;
