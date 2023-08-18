// src/pages/SignUpPage.jsx
import React from 'react';
import Header from '../components/Header/header';
import Nav from '../components/Nav/nav';
import SignUp from '../components/SignUp/signup';
import Footer from '../components/Footer/footer';

function SignUpPage() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <SignUp />
      <Footer />
    </div>
  );
}

export default SignUpPage;