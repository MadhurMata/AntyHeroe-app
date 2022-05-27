import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ErrorPage from 'pages/error-page/ErrorPage';
import Home from 'pages/home/Home';
import HeroeDetail from 'pages/heroeDetail/HeroeDetail';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:heroeName/:heroeId" element={<HeroeDetail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
