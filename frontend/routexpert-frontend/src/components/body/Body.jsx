import React from 'react'
import './body.css'

const Body = () => {
  return (
    <div className="body">
      <h2>Welcome to RouteXpert</h2>
      <p>Your Ultimate Route Optimization Solution</p>
      <div className="features">
        <div className="feature">
          <h3>Efficient Journey Planning</h3>
          <p>Optimize your routes to reach your destinations faster and with less hassle.</p>
        </div>
        <div className="feature">
          <h3>Real-time Traffic Updates</h3>
          <p>Stay informed about traffic conditions and make informed route choices on the go.</p>
        </div>
        <div className="feature">
          <h3>Cost Savings</h3>
          <p>Save time, fuel, and money by choosing the most efficient routes for your journeys.</p>
        </div>
      </div>
      <div className="more-info">
        <h2>Why Choose RouteXpert?</h2>
        <p>Our cutting-edge technology ensures precision in route optimization, allowing you to navigate through urban jungles seamlessly. Whether you're a daily commuter or a delivery driver, RouteXpert empowers you with the tools to make smarter travel decisions.</p>
      </div>
      <button className="cta-button">Get Started</button>
    </div>
  )
}

export default Body