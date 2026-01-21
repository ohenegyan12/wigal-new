import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Frog from './pages/Frog';
import Redde from './pages/Redde';
import SmartUssd from './pages/SmartUssd';
import Asap from './pages/Asap';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Security from './pages/Security';
import Documents from './pages/Documents';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frog" element={<Frog />} />
        <Route path="/redde" element={<Redde />} />
        <Route path="/smart-ussd" element={<SmartUssd />} />
        <Route path="/asap" element={<Asap />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/security" element={<Security />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
      <Chatbot />
    </Router>
  );
}

export default App;
