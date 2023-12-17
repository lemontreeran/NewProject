import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

import Dashboard from "./pages/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import Buy from "./components/Buy";
import Sell from "./components/Sell";
import Sidebar from './partials/Sidebar';
import Header from './partials/Header';
import Wallet from "./components/Wallet";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const countries = [
    { id: 1, name: "Country 1" },
    { id: 2, name: "Country 2" },
    // Add more countries as needed
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
    // Handle user registration (e.g., send data to a server)
    // After successful registration, set the user state
    setUser(formData);
  };

  const handleLogin = (formData) => {
    // Handle user login (e.g., validate credentials)
    // After successful login, set the user state
    setUser(formData);
  };

  const handleLogout = () => {
    // Handle user logout (e.g., clear user data)
    setUser(null);
  };

  const handleSellCredits = (credits) => {
    // Handle the sell credits logic here
    console.log(`Selling ${credits} credits`);
  };

  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
    <div className="flex h-screen overflow-hidden">
     <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
     <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
     <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} username={formData.username}/>
     <main>
      <Routes>
        <Route exact path="/" element={<Dashboard ></Dashboard>} />
        <Route
          exact
          path="/register"
          element={<Register onRegister={handleRegister} />}
        />
          <Route
          exact
          path="/wallet"
          element={<Wallet/>}
        />
        <Route exact path="/login" element={<Login onLogin={handleLogin} formData={formData} setFormData={setFormData} />} />
        <Route
          exact
          path="/buy"
          element={
            <Buy countries={countries} onBuyCredits={handleBuyCredits} />
          }
        />
        <Route
          exact
          path="/sell"
          element={<Sell onSellCredits={handleSellCredits} />}
        ></Route>
         <Route
          exact
          path="/profile"
          element={<Profile formData={formData} />}
        />
      </Routes>
      </main>
      </div>
      </div>
    </>
  );
}

export default App;
