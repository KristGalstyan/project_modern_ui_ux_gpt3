import React from 'react';
import Features from '../features/Features';
import './WhatGPT3.css';

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin">
      <div className="gpt3__whatgpt3-feature">
        <Features />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient-text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Features />
        <Features />
        <Features />
      </div>
    </div>
  );
}

export default WhatGPT3;
