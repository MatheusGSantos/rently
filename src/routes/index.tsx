import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import Wrapper from '../pages/Wrapper';
// import RedirectHandler from './RedirectHandler';

const RoutesIndexer: React.FC = () => (
  <Routes>
    <Route path="/" element={<Wrapper />}>
      <Route index element={<Home />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default RoutesIndexer;
