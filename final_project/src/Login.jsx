import React, { useState } from 'react'
import './Register.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="form__create">
        <form id="action">
          <div className="form__name">
            <h2>MEMBER LOGIN NOW!</h2>
          </div>
          <div className="input">
            <label htmlFor="emailLogin">Email</label>
            <input type="text" id="emailLogin" className="input__type" value={email} onChange={(event) => setEmail(event.target.value)}/>
          </div>
    <div className="input">
      <label htmlFor="passwordLogin">Password</label>
      <input type="password" id="passwordLogin" className="input__type"  value={password} onChange={(event) => setPassword(event.target.value)}/>
    </div>
    <div className="check">
      <label style={{color: 'white',paddingLeft: 20}}> <input type="checkbox" /> Remember me</label>
      <a style={{textDecoration: 'none', color: 'white', paddingLeft: 74}} href="../HTML/DangKi.html"> Don't have account? </a>
    </div>
    <div className="button">
      <button id="button" type="submit" className={email && password ? "active":""} disabled={email && password ? false : true}>Login Now</button>
    </div>
    <div className="box">
      <p> or </p>
    </div>
    <div className="icon">
      <a href="#"><i className="fa-brands fa-instagram" /></a>
      <a href="#"><i className="fa-brands fa-facebook" /></a>
      <a href="#"><i className="fa-brands fa-twitter"  /></a>
    </div>
  </form>
</div>

    </>
  )
}

export default Login