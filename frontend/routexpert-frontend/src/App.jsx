import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import signup from './components/signup/Signup';

const App = () => {
  return (
    <> 
        <Header />
        <Nav />
        <Body />       
        <Footer />
        <signup />

    </>
  )
}

export default App;