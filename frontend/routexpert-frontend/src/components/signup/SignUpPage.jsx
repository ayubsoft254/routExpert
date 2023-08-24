import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css'; // You'll need to style this component

function SignUpPage() {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1>Create Your Account</h1>
        {/* Other form fields go here */}
        <button className="signup-button">Sign Up</button>
        <p className="terms-text">
          By clicking "Sign Up", you agree to our{' '}
          <Link to="/terms">Terms of Service</Link> and{' '}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>
        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
