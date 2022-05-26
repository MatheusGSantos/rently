import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Wrapper from '../pages/Wrapper';
// import RedirectHandler from './RedirectHandler';

const RoutesIndexer: React.FC = () => (
  <Routes>
    <Route path="/" element={<Wrapper />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default RoutesIndexer;
