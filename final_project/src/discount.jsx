// discount.js
import React from 'react';
import './App.css'
import './discount.css'
import Header from './Header';
import Footer from './Footer';
function Discount() {
  return (
    <>
      <Header></Header>
      <div className="formpage">
        <video id="videoOverlay" autoPlay loop muted>
        <source src="../VIDEO/clip10.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <center>
          <img src="../IMG/discount1.jpg" alt="Discount_img" />
        </center>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Discount;
