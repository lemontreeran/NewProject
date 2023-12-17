import React, { useState } from "react";
import "./../css/sell.css"; // Import your CSS file for styling

const Sell = ({ onSellCredits }) => {
   const [credits, setCredits] = useState("");

   const handleCreditChange = (e) => {
      setCredits(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onSellCredits(credits);
   };

   return (
      <div className='sell-container'>
         <form onSubmit={handleSubmit} className='sell-form'>
            <h1>
               <b>Sell credits</b>
            </h1>
            <img src='https://img.freepik.com/free-vector/money-transfer-abstract-concept-illustration_335657-3868.jpg?w=740&t=st=1702825429~exp=1702826029~hmac=6b8f3895a1c99f3ab703482fc06f4a6bb2d6bd0573df1308b5dac27b72050648' alt='' />
            <div className='form-group'>
               <label htmlFor='credits'>Enter Credits</label>
               <input type='number' id='credits' name='credits' value={credits} onChange={handleCreditChange} placeholder='Enter the amount of credits to sell' />
            </div>
            <button className='sell-button' type='submit'>
               Sell
            </button>
         </form>
      </div>
   );
};

export default Sell;
