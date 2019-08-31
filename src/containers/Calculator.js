import React from 'react'

class Calculator extends React.Component {

  constructor(props) {
    super()
    this.resultShown = false;
    this.state = {
      input: '',
      output: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    switch(i) {
      case '=':
        const output = " = " + eval(this.state.input);
        this.setState({output: output});
        this.resultShown = true;
        break;
      case 'C':
        this.setState({input: '', output: ''});
        this.resultShown = false;
        break;
      default:
        if(this.resultShown) {
          this.setState({output: '', input: i});
        } else {
          this.setState({input: this.state.input + i});
        }
        this.resultShown = false;
        break;
    }
  }

  renderButton(i) {
    return (
      <button value={i} onClick={() => this.handleClick(i)}>
          {i}
      </button>
    );
  }

  render() {
    const input = this.state.input;
    const output = this.state.output;

    return (
      <div className="calc">
        <div className="input-output">{input + "   " + output}</div>
        <div className="button-row">
          {this.renderButton(7)}
          {this.renderButton(8)}
          {this.renderButton(9)}
          {this.renderButton('+')}
          {this.renderButton('-')}
        </div>
        <div className="button-row">
          {this.renderButton(4)}
          {this.renderButton(5)}
          {this.renderButton(6)}
          {this.renderButton('/')}
          {this.renderButton('*')}
        </div>
        <div className="button-row">
          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}
          {this.renderButton('=')}
          {this.renderButton('C')}
        </div>
        <div className="button-row">
          {this.renderButton('.')}
          {this.renderButton(0)}
          {this.renderButton('%')}
        </div>
      </div>
    )
  }
}

export default Calculator;
