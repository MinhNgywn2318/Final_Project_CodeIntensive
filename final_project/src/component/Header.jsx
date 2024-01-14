import React, { useState,Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ShoppingCart from '../pages/Shoppingcard';
const Header = ({ cartItems }) => {
  const [showCart, setShowCart] = useState(false);

  const handleCartOpen = () => setShowCart(true);
  const handleCartClose = () => setShowCart(false);
  return (
    <header className="formpage__header" id="backtotop">
      <nav className="formpage__header--nav">
        <ul className="nav__ul">
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li className="dropdown">
            <NavLink to="/dark-chocolate" activeClassName="active">Products &nbsp;<i className="fa-solid fa-caret-down" /></NavLink>
            <div className="dropdown-content">
              <NavLink to="/dark-chocolate" id="dropdown_items" activeClassName="active">Dark Chocolate</NavLink>
              <NavLink to="/white-chocolate" id="dropdown_items" activeClassName="active">White Chocolate</NavLink>
            </div>
          </li>
        </ul>
      </nav>
      <NavLink to="/" activeClassName="active"><img src="../images/logo.png" alt="logo" /></NavLink>
      <nav className="formpage__header--nav">
        <ul className="nav__ul">
          <li><NavLink to="/about_us" activeClassName="active">About us</NavLink></li>
          <li style={{ color: '#ffffff' }}><NavLink to="/login" activeClassName="active">Log in</NavLink>/<NavLink to="/register" activeClassName="active">Sign up</NavLink></li>
          <Fragment>
            <li style={{position:"relative"}}>
              <a href="#" className="cart-icon" onClick={handleCartOpen}>
                {/* Hiển thị icon giỏ hàng */}
                <i className="fa-solid fa-cart-shopping" style={{ color: '#ffffff' }} />
              </a>
              {/* Hiển thị số lượng sản phẩm trong giỏ hàng */}
            {cartItems && cartItems.length > 0 && (
              <div style={{width:"20px",height:"20px",textAlign:"center",lineHeight:"20px",position:"absolute", right: "8px",top: "30px",color: '#ffffff',borderRadius:"20px", backgroundColor:"brown"}}>{cartItems.length}</div>
            )}
            </li>
            
          </Fragment>
          
        </ul>
      </nav>
      <ShoppingCart show={showCart} handleClose={handleCartClose} cartItems={cartItems} />
    </header>
  );
};

export default Header;
