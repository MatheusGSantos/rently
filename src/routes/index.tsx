import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Wrapper from '../pages/Wrapper';
// import RedirectHandler from './RedirectHandler';

const RoutesIndexer: React.FC = () => (
  <Routes>
    <Route path="/" element={<Wrapper />}>
      <Route index element={<Home />} />
      <Route path="signin" element={<Home />} />
    </Route>
  </Routes>
);

export default RoutesIndexer;
