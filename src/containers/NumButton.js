import React from 'react'
import './style.css'

class NumButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    return(this.state.value)
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.value}
      </button>
    )
  }
}

export default NumButton
