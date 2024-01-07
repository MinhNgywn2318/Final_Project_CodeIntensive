import React from 'react';
import './App.css';
import Discount from '../page/Discount';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../page/Login';
import Register from '../page/Register';
import DarkChocolate from '../page/DarkChocolate';
import WhiteChocolate from '../page/WhiteChocolate';
function App() {
  const productList = [
    {
      "id": 1,
      "nameProduct": "Coconut Fruit",
      "images":"../IMG/dark-chocolate-fruit-nut-18.00$.jpg",
      "Total":20,
    },
    {
      "id": 2,
      "nameProduct": "Coconut Fruit",
      "images":"../IMG/dark-chocolate-fruit-nut-18.00$.jpg",
      "Total":20,
    },
    {
      "id": 3,
      "nameProduct": "Coconut Fruit",
      "images":"../IMG/dark-chocolate-fruit-nut-18.00$.jpg",
      "Total":20,
    },
    {
      "id": 4,
      "nameProduct": "Coconut Fruit",
      "images":"../IMG/dark-chocolate-fruit-nut-18.00$.jpg",
      "Total":20,
    }
    ,{
      "id": 5,
      "nameProduct": "Coconut Fruit",
      "images":"../IMG/dark-chocolate-fruit-nut-18.00$.jpg",
      "Total":20,
    },
    {
      "id": 6,
      "nameProduct": "Coconut Fruit",
      "images":"../IMG/dark-chocolate-fruit-nut-18.00$.jpg",
      "Total":20,
    },
    {
      "id": 7,
      "nameProduct": "Coconut Fruit",
      "images":"../IMG/dark-chocolate-fruit-nut-18.00$.jpg",
      "Total":20,
    }
  ]
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Discount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dark-chocolate" element={<DarkChocolate  productList={productList}/>} />
        <Route path="/white-chocolate" element={<WhiteChocolate />} />
      </Routes>
    </Router>
  );
}
export default App;