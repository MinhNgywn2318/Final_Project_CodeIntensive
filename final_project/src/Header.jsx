import React from 'react'

const Header = () => {
  return (
    <>
    <header className="formpage__header" id="backtotop">
    <nav className="formpage__header--nav">
      <ul className="nav__ul">
        <li><a href="../HTML/Home.html">Home</a></li>
        <li className="dropdown">
          <a href="#">Products &nbsp;<i className="fa-solid fa-caret-down" /></a>
          <div className="dropdown-content">
            <a href="DanhMuc_DarkChoco.html" id="dropdown_items">Dark Chocolate</a>
            <a href="DanhMuc_WhiteChoco.html" id="dropdown_items">White Chocolate</a>
          </div>
        </li>
        <li><a href="../HTML/DanhMuc_Gift.html">Christmas Gifts</a></li>
      </ul>
    </nav>
    <a href="../HTML/home.html"><img src="../IMG/logo.png" alt="logo" /></a>
    <nav className="formpage__header--nav">
      <ul className="nav__ul">
        <li><a href="../HTML/AboutUs.html">About us</a></li>
        <li><a href="../HTML/discount.html">Discount</a></li>
        <li style={{color: '#ffffff'}}><a href="../HTML/DangNhap.html">Log in</a>/<a href="../HTML/DangKi.html">Sign up</a>
        </li>
        <li><a href className="cart-icon">
            <i className="fa-solid fa-cart-shopping" style={{color: '#ffffff'}} />
          </a></li>
      </ul>
    </nav>
  </header>
    </>
  )
}

export default Header