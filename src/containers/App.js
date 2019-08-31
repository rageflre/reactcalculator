import React from 'react'
import Footer from './Footer'
import MainContent from './MainContent'
import Calculator from './Calculator'
import Header from './Header'
import './style.css'

class App extends React.Component {
  
  render() {
    return (
      <div>
      <Header />
      <MainContent />
      <Calculator />
      <Footer />
      </div>
    )
  }
}

export default App;
