import React, { useState } from 'react';
import './../css/buy.css'; // Import your CSS file for styling

const Buy = ({ countries, onBuyCredits }) => {
  const [credits, setCredits] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCreditChange = (e) => {
    setCredits(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //onBuyCredits(credits, selectedCountry);
    window.location.href="/wallet"
  };

  return (
    <div className="buy-container">
      <form onSubmit={handleSubmit} className="buy-form">
        <div className="form-group">
          <label htmlFor="credits">Enter Credits</label>
          <input
            type="number"
            id="credits"
            name="credits"
            value={credits}
            onChange={handleCreditChange}
            placeholder="Enter the amount of credits"
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Select a Country</label>
          <select
            id="country"
            name="country"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="" disabled>
              Choose a country
            </option>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <button className="buy-button" type="submit" >Buy</button>
      </form>
    </div>
  );
};

export default Buy;
