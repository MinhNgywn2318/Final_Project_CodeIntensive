import React from 'react';
import './App.css';
import Discount from '../page/Discount';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../page/Login';
import Register from '../page/Register';
import DarkChocolate from '../page/DarkChocolate';
import WhiteChocolate from '../page/WhiteChocolate';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Discount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dark-chocolate" element={<DarkChocolate />} />
        <Route path="/white-chocolate" element={<WhiteChocolate />} />
      </Routes>
    </Router>
  );
}
