import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import SignUpPage from './components/signup/SignUpPage';

const App = () => {
  return (
    <Router> {/* Place the Router here */}
      <>
        <Header />
        <Nav />
        <Body />
        <Footer />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="./components/signup/SignUpPage" element={<SignUpPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

