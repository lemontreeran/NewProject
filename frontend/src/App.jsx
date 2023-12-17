import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import Buy from "./components/Buy";
import Sell from "./components/Sell";
import Sidebar from "./components/Sidebar";

import Wallet from "./components/Wallet";

function App() {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const countries = [
      { id: 1, name: "Wakanda" },
      { id: 2, name: "Narnia " },
   ];
   const [formData, setFormData] = useState({
      username: "",
      password: "",
   });

   const handleBuyCredits = (credits, country) => {
      // Handle the buy credits logic here
      console.log(`Buying ${credits} credits for ${country}`);
   };

   const handleRegister = (formData) => {
      setUser(formData);
   };

   const handleLogin = (formData) => {
      setUser(formData);
   };

   const handleSellCredits = (credits) => {
      // Handle the sell credits logic here
      console.log(`Selling ${credits} credits`);
   };

   return (
      <>
         <div className='flex h-screen overflow-hidden'>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
               <main>
                  <Routes>
                     <Route exact path='/' element={<Dashboard></Dashboard>} />
                     <Route exact path='/register' element={<Register onRegister={handleRegister} />} />
                     <Route exact path='/wallet' element={<Wallet />} />
                     <Route exact path='/login' element={<Login onLogin={handleLogin} formData={formData} setFormData={setFormData} />} />
                     <Route exact path='/buy' element={<Buy countries={countries} onBuyCredits={handleBuyCredits} />} />
                     <Route exact path='/sell' element={<Sell onSellCredits={handleSellCredits} />}></Route>
                  </Routes>
               </main>
            </div>
         </div>
      </>
   );
}

export default App;
