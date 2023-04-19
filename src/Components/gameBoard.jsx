import React, { Component } from "react";



class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      numSteps: 0,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
  }

  handleAdd() {
    this.setState({ value: this.state.value + 1, numSteps: this.state.numSteps + 1 });
  }

  handleSubtract() {
    this.setState({ value: this.state.value - 1, numSteps: this.state.numSteps + 1 });
  }

  handleMultiply() {
    this.setState({ value: this.state.value * 2, numSteps: this.state.numSteps + 1 });
  }

  handleDivide() {
    this.setState({ value: this.state.value / 2, numSteps: this.state.numSteps + 1 });
  }

  render() {
    const { value, numSteps } = this.state;

    return (
      <div>
        <h4>Current Value: {value}</h4>
        <h4>Num Steps: {numSteps}</h4>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleSubtract}>-1</button>
        <button onClick={this.handleMultiply}>*2</button>
        <button onClick={this.handleDivide}>/2</button>
      </div>
    );
  }
}

export default GameBoard;
