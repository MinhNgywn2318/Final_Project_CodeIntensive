import React, { useState } from 'react';
import '../src/Register.css';

const Register = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setnewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      <div className="form__create">
        <form id="action">
          <div className="form__name">
            <h2>CREATE MEMBER NOW!</h2>
          </div>
          <div className="input">
            <label htmlFor="first-name">Your name</label>
            <input type="text" id="first-name" className="input__type" value={newName} onChange={(event) => setNewName(event.target.value)}/>
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="input__type" value={newEmail} onChange={(event) => setnewEmail(event.target.value)}/>
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="input__type" value={newPassword} onChange={(event) => setNewPassword(event.target.value)}/>
          </div>
          <div className="input">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" className="input__type" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
          </div>
          <div className="check" style={{ display: 'flex', alignItems: 'center',paddingLeft: 20 }}>
            <input type="checkbox" id="check-box" />
            <label htmlFor="check-box" style={{ color: 'white', marginTop: '5px' }}>
              Tôi đồng ý với các điều khoản
            </label>
          </div>
          <div className="button">
            <button type="submit" className={newName && newEmail && newPassword && confirmPassword ? "active":""} disabled={newName && newEmail && newPassword && confirmPassword ? false : true}>CREATE</button>
          </div>
          <div className="box">
            <p> or </p>
          </div>
          <div className="icon">
            <a href="#"><i className="fa-brands fa-instagram" /></a>
            <a href="#"><i className="fa-brands fa-facebook" /></a>
            <a href="#"><i className="fa-brands fa-twitter" /></a>
          </div>
        </form>
      </div>
      <div>
        <span id="errName text-danger"></span>
        <span id="errEmail text-danger"></span>
        <span id="errPass text-danger" ></span>
        <span id="errConfirmPass text-danger"></span>
      </div>
    </>
  );
};

export default Register;
