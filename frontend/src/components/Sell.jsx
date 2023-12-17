import React, { useState } from 'react';
import './../css/sell.css'; // Import your CSS file for styling

const Sell = ({ onSellCredits }) => {
  const [credits, setCredits] = useState('');

  const handleCreditChange = (e) => {
    setCredits(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSellCredits(credits);
  };

  return (
    <div className="sell-container">
      <form onSubmit={handleSubmit} className="sell-form">
        <div className="form-group">
          <label htmlFor="credits">Enter Credits</label>
          <input
            type="number"
            id="credits"
            name="credits"
            value={credits}
            onChange={handleCreditChange}
            placeholder="Enter the amount of credits to sell"
          />
        </div>
        <button className="sell-button" type="submit">Sell</button>
      </form>
    </div>
  );
};

export default Sell;
