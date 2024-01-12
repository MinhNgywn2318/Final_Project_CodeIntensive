import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="formpage__header" id="backtotop">
      <nav className="formpage__header--nav">
        <ul className="nav__ul">
          <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
          <li className="dropdown">
            <NavLink to="/products" activeClassName="active">Products &nbsp;<i className="fa-solid fa-caret-down" /></NavLink>
            <div className="dropdown-content">
              <NavLink to="/dark-chocolate" id="dropdown_items" activeClassName="active">Dark Chocolate</NavLink>
              <NavLink to="/white-chocolate" id="dropdown_items" activeClassName="active">White Chocolate</NavLink>
            </div>
          </li>
          <li><NavLink to="/gifts" activeClassName="active">Christmas Gifts</NavLink></li>
        </ul>
      </nav>
      <NavLink to="/home" activeClassName="active"><img src="../images/logo.png" alt="logo" /></NavLink>
      <nav className="formpage__header--nav">
        <ul className="nav__ul">
          <li><NavLink to="/about_us" activeClassName="active">About us</NavLink></li>
          <li><NavLink to="/" activeClassName="active">Discount</NavLink></li>
          <li style={{ color: '#ffffff' }}><NavLink to="/login" activeClassName="active">Log in</NavLink>/<NavLink to="/register" activeClassName="active">Sign up</NavLink></li>
          <li><a href="#" className="cart-icon">
            <i className="fa-solid fa-cart-shopping" style={{ color: '#ffffff' }} />
          </a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
