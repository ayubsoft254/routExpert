import React from 'react'

const Signup = () => {
  return (
    <div className="signup-container">
    <h2>Create an Account</h2>
    <form className="signup-form">
      {/* Add form fields for sign-up */}
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />

      <button type="submit" className="signup-button">Sign Up</button>
    </form>
  </div>
  )
}

export default Signup