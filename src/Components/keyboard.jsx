import React, { Component } from 'react';
import '../CSS/keyboard.css';
import ChangeLang from './changeLang';
import TextArea from './textArea';

class Keyboard extends Component {
  constructor(props) {
    super(props);
    console.log('keyboard-ctor', props);
    console.log(props);
    this.state = {
      capslock: false,
      text: this.props.text
    }
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  };
  handleClick = (value) => {
    console.log(`Selected key: ${value}`);
    // this.props.updateText(value);
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
    } else if (key === 'CAPSLOCK') {
      this.setState(prevState => ({
        capslock: !prevState.capslock
      }));
    } else {
      const letter = this.state.capslock ? key.toUpperCase() : key.toLowerCase();
      this.setState(prevState => ({
        text: prevState.text + letter
      }));
    }
  };

  render() {

    let HebrewKeys = [
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
      { label: '/', value: '/' },
      { label: "'", value: '\'' },
      { label: 'ק', value: 'ק' },
      { label: 'ר', value: 'ר' },
      { label: 'א', value: 'א' },
      { label: 'ט', value: 'ט' },
      { label: 'ו', value: 'ו' },
      { label: 'ן', value: 'ן' },
      { label: 'ם', value: 'ם' },
      { label: 'פ', value: 'פ' },
      { label: 'ש', value: 'ש' },
      { label: 'ד', value: 'ד' },
      { label: 'ג', value: 'ג' },
      { label: 'כ', value: 'כ' },
      { label: 'ע', value: 'ע' },
      { label: 'י', value: 'י' },
      { label: 'ח', value: 'ח' },
      { label: 'ל', value: 'ל' },
      { label: 'ך', value: 'ך' },
      { label: 'ף', value: 'ף' },
      { label: 'ז', value: 'ז' },
      { label: 'ס', value: 'ס' },
      { label: 'ב', value: 'ב' },
      { label: 'ה', value: 'ה' },
      { label: 'נ', value: 'נ' },
      { label: 'מ', value: 'מ' },
      { label: 'צ', value: 'צ' },
      { label: 'ת', value: 'ת' },
      { label: 'ץ', value: 'ץ' },
      { label: 'DEL', value: 'DEL' },
      { label: 'SPACE', value: 'SPACE' },
      { label: 'CAPSLOCK', value: 'CAPSLOCK' }
    ];

    let EnglishKeys = [
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
      { label: 'SPACE', value: 'SPACE' },
      { label: 'CAPSLOCK', value: 'CAPSLOCK' }
    ];
    const keyboard = this.props.language === 'english' ? EnglishKeys : HebrewKeys;
    return (
      <div className="keyboard-container">

        <div className="keyboard keys">
          {keyboard.map((key, index) => {
            let classes = 'keyboard key';
            if (key.value === 'DEL') classes += ' keyboard-delete';
            if (key.value === 'SPACE') classes += ' keyboard-space';
            if (key.value === 'CAPSLOCK') classes += ' keyboard-capslock';
            return (
              <button
                key={index}
                className={classes}
                onClick={() => { this.handleKeyPress(key.value);}}              >
                {this.state.capslock ? key.value.toUpperCase() : key.value.toLowerCase()}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Keyboard;

