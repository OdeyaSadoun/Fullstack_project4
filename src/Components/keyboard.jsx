import React, { Component } from 'react';
import '../CSS/keyboard.css';



class Keyboard extends Component {
  state = {
    text: '',
    language: 'english'
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleLanguageChange = event => {
    this.setState({ language: event.target.value });
  };

  handleKeyPress = key => {
    if (key === 'DEL') {
      this.setState(prevState => ({
        text: prevState.text.slice(0, -1)
      }));
    } else if (key === 'SPACE') {
      this.setState(prevState => ({
        text: prevState.text + ' '
      }));
    } else {
      this.setState(prevState => ({
        text: prevState.text + key
      }));
    }
  };

  render() {
    let keys = [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' },
      { label: '6', value: '6' },
      { label: '7', value: '7' },
      { label: '8', value: '8' },
      { label: '9', value: '9' },
      { label: '0', value: '0' },
      { label: 'Q', value: 'Q' },
      { label: 'W', value: 'W' },
      { label: 'E', value: 'E' },
      { label: 'R', value: 'R' },
      { label: 'T', value: 'T' },
      { label: 'Y', value: 'Y' },
      { label: 'U', value: 'U' },
      { label: 'I', value: 'I' },
      { label: 'O', value: 'O' },
      { label: 'P', value: 'P' },
      { label: 'A', value: 'A' },
      { label: 'S', value: 'S' },
      { label: 'D', value: 'D' },
      { label: 'F', value: 'F' },
      { label: 'G', value: 'G' },
      { label: 'H', value: 'H' },
      { label: 'J', value: 'J' },
      { label: 'K', value: 'K' },
      { label: 'L', value: 'L' },
      { label: 'Z', value: 'Z' },
      { label: 'X', value: 'X' },
      { label: 'C', value: 'C' },
      { label: 'V', value: 'V' },
      { label: 'B', value: 'B' },
      { label: 'N', value: 'N' },
      { label: 'M', value: 'M' },
      { label: 'DEL', value: 'DEL' },
      { label: 'SPACE', value: 'SPACE' }
    ];

    return (
        <React.Fragment>
          <div id="keyboard">
            {keys.map(key => (
              <div
                key={key.value}
                className={`key ${key.value === 'SPACE' ? 'space' : ''} ${
                  key.value === 'DEL' ? 'del' : ''
                }`}
                onClick={() => this.handleKeyPress(key.value)}
              >
                {key.label}
              </div>
            ))}
          </div>
          <div id="input-container">
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Type here..."
            />
          </div>
          <div id="language-container">
            <label htmlFor="language-select">Language:</label>
            <select
              id="language-select"
              value={this.state.language}
              onChange={this.handleLanguageChange}
            >
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
            </select>
          </div>
        </React.Fragment>
      );
      
  }
}

export default Keyboard;

