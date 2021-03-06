import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Home from '../views/Home';

export default function LayoutDefault({ children }){
  const [signupModalActive, setSignupModalActive] = useState(false);
  const [loginModalActive, setLoginModalActive] = useState(false);

  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" signupModalActive={signupModalActive} setSignupModalActive={setSignupModalActive} loginModalActive={loginModalActive} setLoginModalActive={setLoginModalActive} />
      <Home signupModalActive={signupModalActive} setSignupModalActive={setSignupModalActive} loginModalActive={loginModalActive} setLoginModalActive={setLoginModalActive} />
      <main className="site-content">
        {children}
      </main>
      <Footer />
    </>
  )
};