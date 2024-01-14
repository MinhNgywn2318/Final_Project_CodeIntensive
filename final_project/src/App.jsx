import React from 'react';
import './App.css';
import Discount from './pages/Discount';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import DarkChocolate from './pages/DarkChocolate';
import WhiteChocolate from './pages/WhiteChocolate';
import Aboutus from './pages/aboutus';
function App() {
  const productList = [
  {
    "id": 1,
    "nameProduct": "Fruit nut",
    "images": "../images/dark-chocolate-fruit-nut-18.00$.jpg",
    "price": "18.00$",
    "description": "Experience the unique fusion with the warmth of nut.",
    "quatity": 20
  },
  {
    "id": 2,
    "nameProduct": "Cocoa nibs",
    "images": "../images/dark-chocolate-with-coca-nibs-19.20$.jpg",
    "price": "19.20$",
    "description": "Discover refreshing  unique crunch of coco nib.",
    "quatity": 20
  },
    {
    "id": 3,
    "nameProduct": "Coffee",
    "images": "../images/dark-chocolate-with-coffee-24.15$.jpg",
    "price": "24.15$",
    "description": "Discover the refreshingwith the bold flavors coffee.",
    "quatity": 20
  },
  {
    "id": 4,
    "nameProduct": "Chocolate cumin",
    "images": "../images/dark-chocolate-with-cumin-21.50$.jpg",
    "price": "21.50$",
    "description": "Discover the refreshing with the bold of flavors coffee.",
    "quatity": 20
  },
  {
    "id": 5,
    "nameProduct": "Chocolate figs",
    "images": "../images/dark-chocolate-with-figs-20.05$.jpg",
    "price": "20.05$",
    "description": "Experience the perfect harmo with succulent figs coffee.",
    "quatity": 20
  },
  {
    "id": 6,
    "nameProduct": "Chocolate hazelnut",
    "images": "../images/dark-chocolate-with-hazelnut-21.30$.jpg",
    "price": "21.30$",
    "description": "Indulge in the rich and creamy roasted hazelnuts.",
    "quatity": 20
  },
  {
    "id": 7,
    "nameProduct": "Chocolate honey",
    "images": "../images/dark-chocolate-with-honey-28.50$.jpg",
    "price": "28.50$",
    "description": "Experience the unique fusion with the warmth of honey.",
    "quatity": 20
  },
    {
    "id": 8,
    "nameProduct": "Chocolate mint",
    "images": "../images/dark-chocolate-with-mint-21.25$.jpg",
    "price": "21.25$",
      "description": "Experience the unique fusion with the warmth of nut."
    ,"quatity": 20
  },
  {
    "id": 9,
    "nameProduct": "Chocolate nutmeg",
    "images": "../images/dark-chocolate-with-nutmeg-19.80$.jpg",
    "price": "19.80$",
    "description": "Experience the unique fusion with the warmth of nut.",
    "quatity": 20
  },
  {
    "id": 10,
    "nameProduct": "Chocolate orange",
    "images": "../images/dark-chocolate-with-orange-slice-22.05$.jpg",
    "price": "22.05$",
    "description": "Experience the unique fusion with the warmth of nut.",
    "quatity": 20
  },
  {
    "id": 11,
    "nameProduct": "Chocolate apple",
    "images": "../images/dark-chocolate-with-pineapple-21.00$.jpg",
    "price": "21.00$",
    "description": "Experience the unique fusion with the warmth of nut.",
    "quatity": 20
  },
    {
    "id": 12,
    "nameProduct": "Chocolate pista",
    "images": "../images/dark-chocolate-with-pista-23.50$.jpg",
    "price": "23.50$",
      "description": "Experience the unique fusion with the warmth of nut.",
    "quatity": 20
  },
  {
    "id": 13,
    "nameProduct": "Chocolate raisin",
    "images": "../images/dark-chocolate-with-raisin-20.00$.jpg",
    "price": "20.00$",
    "description": "Indulge in the perfect pairing and plump raisins."
    ,"quatity": 20
  }
  ]
  const productList_White = [
  {
    "id": 1,
    "nameProduct": "Chocolate original",
    "images": "../images/white-chocolate-original-18.00$.jpg",
    "price": "18.00$",
      "description": "Experience the unique fusion with the warmth of nut.",
    "quatity": 20
  },
  {
    "id": 2,
    "nameProduct": "Chocolate chilli",
    "images": "../images/white-chocolate-with-chilli-20.05$.jpg",
    "price": "20.05$",
    "description": "Discover refreshing  unique crunch of coco-cola nib.",
    "quatity": 20
  },
    {
    "id": 3,
    "nameProduct": "Chocolate salt",
    "images": "../images/white-chocolate-with-chilli-and-salt-21.50$.jpg",
    "price": "21.50$",
      "description": "Discover the refreshingwith the bold flavors."
    ,"quatity": 20
  },
  {
    "id": 4,
    "nameProduct": "Chocolate cocoa",
    "images": "../images/white-chocolate-with-cocoa-nibs-19.20$.jpg",
    "price": "19.20$",
    "description": "Discover the refreshing with the bold of flavors.",
    "quatity": 20
  },
  {
    "id": 5,
    "nameProduct": "Chocolate figs",
    "images": "../images/white-chocolate-with-coffee-23.00$.jpg",
    "price": "23.00$",
    "description": "Experience the perfect harmo with succulent figs."
    ,"quatity": 20
  },
  {
    "id": 6,
    "nameProduct": "Chocolate hazelnut",
    "images": "../images/dark-chocolate-with-hazelnut-21.30$.jpg",
    "price": "21.30$",
    "description": "Indulge in the rich and creamy roasted hazelnuts."
    ,"quatity": 20
  },
  {
    "id": 7,
    "nameProduct": "Chocolate chilli",
    "images": "../images/white-chocolate-with-chilli-20.05$.jpg",
    "price": "0.05$",
    "description": "Discover refreshing  unique crunch of coco-cola nib.",
    "quatity": 20
  },
    {
    "id": 8,
    "nameProduct": "Chocolate salt",
    "images": "../images/white-chocolate-with-chilli-and-salt-21.50$.jpg",
    "price": "21.50$",
      "description": "Discover the refreshingwith the bold flavors coffee.",
    "quatity": 20
  },
  {
    "id": 9,
    "nameProduct": "Chocolate cocoa",
    "images": "../images/white-chocolate-with-cocoa-nibs-19.20$.jpg",
    "price": "19.20$",
    "description": "Discover the refreshing with the bold of flavors coffee.",
    "quatity": 20
  },
  {
    "id": 10,
    "nameProduct": "Chocolate figs",
    "images": "../images/white-chocolate-with-coffee-23.00$.jpg",
    "price": "23.00$",
    "description": "Experience the perfect harmo with succulent figs coffee.",
    "quatity": 20
  }
  ]
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Discount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about_us" element={<Aboutus />} />
        <Route path="/dark-chocolate" element={<DarkChocolate  productList={productList}/>} />
        <Route path="/white-chocolate" element={<WhiteChocolate productList={productList_White} />} />
      </Routes>
    </Router>
  );
}
export default App;