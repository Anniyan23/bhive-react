// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import { DataProvider } from './context/DataContext';

const App: React.FC = () => {
  return (
    <DataProvider>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
