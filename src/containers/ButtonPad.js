import React from 'react'
import NumButton from './NumButton'
import './style.css'

class ButtonPad extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <div className="button-pad">
        <div className="row1">
        <NumButton value={7} />
        <NumButton value={8} />
        <NumButton value={9} />
        </div>
        <div className="row2">
        <NumButton value={4} />
        <NumButton value={5} />
        <NumButton value={6} />
        </div>
        <div className="row3">
        <NumButton value={1} />
        <NumButton value={2} />
        <NumButton value={3} />
        </div>
        <div className="row4">
        <NumButton value={0} />
        </div>
      </div>
    )
  }
}

export default ButtonPad
