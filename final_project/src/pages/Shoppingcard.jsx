import React, { useState, useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import '../shop.css';

const ShoppingCart = ({ show, handleClose, cartItems }) => {
  const [localCartItems, setLocalCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Synchronize localCartItems with cartItems
    setLocalCartItems(cartItems);
  }, [cartItems]);

 useEffect(() => {
  const total = localCartItems.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = parseInt(item.quantity, 10) || 0;
    const itemTotal = itemPrice * itemQuantity;
    return acc + itemTotal;
  }, 0);
  setTotalPrice(total);
}, [localCartItems]);



  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = localCartItems.map((item) => {
      if (item.id === itemId) {
        const updatedQuantity = item.quantity + 1;
        const updatedTotal = updatedQuantity * item.price;
        return { ...item, quantity: updatedQuantity, Total: updatedTotal };
      }
      return item;
    });
    setLocalCartItems(updatedCart);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = localCartItems.map((item) => {
      if (item.id === itemId) {
        const updatedQuantity = Math.max(1, item.quantity - 1);
        const updatedTotal = updatedQuantity * item.price;
        return { ...item, quantity: updatedQuantity, Total: updatedTotal };
      }
      return item;
    });
    setLocalCartItems(updatedCart);
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" style={{ width: "35%" }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping with envato</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* Hiển thị danh sách sản phẩm trong giỏ hàng */}
        <ul className='shop'>
          {localCartItems && localCartItems.length > 0 ? (
            localCartItems.map((item) => (
              <li key={item.id}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={item.images} alt={item.nameProduct} style={{ width: '150px', height: "200px", marginRight: '50px' }} />
                  <div>
                    <p>{item.nameProduct}</p>
                    <p>
                      Quantity:
                      <button className='buttonshop' style={{ marginRight: "10px" }} onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                      {item.quantity}
                      <button className='buttonshop' style={{ marginLeft: "10px" }} onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                    </p>
                    <p>Price: {item.price}</p>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>Your cart is empty.</li>
          )}
          
              </ul>
              <div style={{ display:"flex", marginTop:"20px", alignItems:"center"}}>
                      <strong>Total: {totalPrice}$</strong>
                      <button className='buttonShop'>Shop now</button>
          </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
