import React from 'react'
import './header.css'
import LoGo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
        <img src={LoGo} alt="RouteXpert Logo" /> 
        </div>
        <div className="info">
          <h1>Discover Your Routes with RouteXpert</h1>
          <p>Plan your journey with ease and reach your destinations hassle-free.</p>
        </div>
        <div className="buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Header