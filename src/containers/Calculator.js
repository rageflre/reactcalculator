import React from 'react'
import Footer from './Footer'
import MainContent from './MainContent'
import Header from './Header'
import ButtonPad from './ButtonPad'
import './style.css'

class Calculator extends React.Component {

  constructor() {
    super()
    this.state = {
      result: 0
    }
  }

  render() {
    return (
      <div>
      <Header />
      <MainContent />
      <ButtonPad />
      <Footer />
      </div>
    )
  }
}

export default Calculator;
