import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/globals.css';
import PricingCard from './components/Task1/PricingCard';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home />
        } />
      </Routes>
    </Router>
  );
};

export default App;