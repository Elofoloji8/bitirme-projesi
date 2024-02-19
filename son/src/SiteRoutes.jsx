import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Anasayfa from './pages/Anasayfa';
import Calismalarimiz from './pages/Calismalarimiz';
import Sehrimiz from './pages/Sehrimiz';
import Hakkimizda from './pages/Hakkimizda';
import PageNotFound from './pages/PageNotFound';

function SiteRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Anasayfa />} />
      <Route path='/pages' element={<Calismalarimiz />} />
      <Route path='/Sehrimiz' element={<Sehrimiz />} />
      <Route path='/Hakkimizda' element={<Hakkimizda />} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  );
}

export default SiteRoutes