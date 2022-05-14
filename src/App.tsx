import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks';
import RoutesIndexer from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <RoutesIndexer />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
