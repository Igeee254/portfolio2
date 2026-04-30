import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Explore from './pages/Explore';
import Inventory from './pages/Inventory';
import SellCar from './pages/SellCar';
import CarDetails from './pages/CarDetails';
import Painting from './pages/Painting';
import PaintDetails from './pages/PaintDetails';
import News from './pages/News';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/news" element={<News />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/painting/:id" element={<PaintDetails />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/sell-car" element={<SellCar />} />
      </Routes>
    </Router>
  );
}

export default App;
