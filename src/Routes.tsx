// src/Routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import StoresPage from '../src/pages/StoresPage';
import UnderConstructionPage from '../src/pages/UnderConstructionPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stores" element={<StoresPage />} />
      <Route path="/products" element={<UnderConstructionPage />} />
    </Routes>
  );
};

export default AppRoutes;
