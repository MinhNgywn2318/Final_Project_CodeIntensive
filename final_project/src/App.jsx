import React from 'react';
import './App.css';
import Discount from '../page/Discount';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../page/Login';
import Register from '../page/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Discount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
