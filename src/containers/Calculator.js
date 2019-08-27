import React from 'react';
import Footer from './Footer'
import MainContent from './MainContent'
import Header from './Header'
import './style.css'

class Calculator extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <Header />
      <MainContent />
      <Footer />
      </div>
    )
  }
}

export default Calculator;
