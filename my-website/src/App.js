// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/about" className="text-white">About</a></li>
            <li><a href="/activities" className="text-white">Activities</a></li>
            <li><a href="/contact" className="text-white">Contact</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
