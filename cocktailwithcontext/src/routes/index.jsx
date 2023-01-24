import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../Pages/About';
import DrinkDetails from '../Pages/DrinkDetails';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';

const RouteIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/drinkdetails/:id" element={<DrinkDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default RouteIndex;
