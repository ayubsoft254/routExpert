import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>Email: info@routexpert.com</p>
          <p>Phone: +254 (113) 364472</p>
        </div>
        <div className="help-info">
          <h4>24/7 Helpline</h4>
          <p>For assistance, call: 1-800-ROUTE-HELP</p>
        </div>
      </div>
      <p>&copy; 2023 RouteXpert. All rights reserved.</p>
    </footer>
  )
}

export default Footer