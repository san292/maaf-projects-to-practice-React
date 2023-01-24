import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DetailsPage, HomePage, Favoris } from '../pages';

const RouteIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="favoris" element={<Favoris />} />
      <Route path="details/:id" element={<DetailsPage />} />
    </Routes>
  );
};
export default RouteIndex;
