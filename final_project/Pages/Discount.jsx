// discount.js
import React from 'react';
import '../src/App.css'
import '../src/discount.css'
import Header from '../component/Header';
import Footer from '../component/Footer';
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
