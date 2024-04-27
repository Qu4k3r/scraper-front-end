import React from 'react';
import './Quote.css';

const Quote = () => {
  return (
    <div className="quote-container">
      <div className="quote-banner">
        <p className="quote-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus...
        </p>
      </div>
      <div className="quote-info">
        <p className="quote-author">Husni Ramdani</p>
        <p className="quote-date">30 November 2021</p>
      </div>
    </div>
  );
};

export default Quote;