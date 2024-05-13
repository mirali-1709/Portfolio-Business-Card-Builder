//import React from 'react';
import React, { useEffect, useState } from "react";  
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { auth } from "./fierbase-config";
import Home from '../components/Home/Home';
import LandingPage from '../components/LandingPage/';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
//import Portfolio from '../components/Portfolio/PortfolioPage';
import AllPortfoliosPage from '../components/AllPortfolio/AllPortfoliosPage';
import PortfolioTemp from '../components/Templete/PortfolioTemp';
import PortfolioForm from '../src/Form/PortfolioForm';
import BusinesscardForm from '../components/businesscard/businessCardForm';
//import useAuthProtection from './useAuthProtection'; 


const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  //useAuthProtection(); 

  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home name={userName} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/Home" element={<Home />} /> */}
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/portfolio/:id" element={<PortfolioTemp />} /> */}
          <Route path="/portfolio/:id" element={<PortfolioTemp />} />
          <Route path="/PortfolioForm" element={<PortfolioForm />} />
          <Route path="/all-portfolios" element={<AllPortfoliosPage />} />
          <Route path="/businessCard" element={<BusinesscardForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;