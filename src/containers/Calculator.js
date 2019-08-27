import React from 'react';
import ReactDOM from 'react-dom'
import Footer from './Footer'
import MainContent from './MainContent'
import Header from './Header'
import './style.css'

function Calculator() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Calculator;
