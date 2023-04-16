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

  handleClick = (value) => { //click on keyboard
    console.log(`Selected key: ${value}`);
    let letter = this.state.capslock ? value.toUpperCase() : value.toLowerCase();
    if (value === 'SPACE') {
      letter = ' ';
      this.props.onClick(letter);
    }
    else if (value === 'CAPSLOCK') {
      this.setState(prevState => ({ capslock: !prevState.capslock }));
    }
    else if (value === 'DEL') {
      this.setState(prevState => ({ text: prevState.text.slice(0, -1)}));
    }
    else {
      this.props.onClick(letter);
    }
  };

//   handleKeyPress = key => {

//   } else {
//   const letter = this.state.capslock ? key.toUpperCase() : key.toLowerCase();
//   this.setState(prevState => ({
//     text: prevState.text + letter
//   }));
// }
//   };

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
    { label: 'Q', value: 'q' },
    { label: 'W', value: 'w' },
    { label: 'E', value: 'e' },
    { label: 'R', value: 'r' },
    { label: 'T', value: 't' },
    { label: 'Y', value: 'y' },
    { label: 'U', value: 'u' },
    { label: 'I', value: 'i' },
    { label: 'O', value: 'o' },
    { label: 'P', value: 'p' },
    { label: 'A', value: 'a' },
    { label: 'S', value: 's' },
    { label: 'D', value: 'd' },
    { label: 'F', value: 'f' },
    { label: 'G', value: 'g' },
    { label: 'H', value: 'h' },
    { label: 'J', value: 'j' },
    { label: 'K', value: 'k' },
    { label: 'L', value: 'l' },
    { label: 'Z', value: 'z' },
    { label: 'X', value: 'x' },
    { label: 'C', value: 'c' },
    { label: 'V', value: 'v' },
    { label: 'B', value: 'b' },
    { label: 'N', value: 'n' },
    { label: 'M', value: 'm' },
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
              onClick={() => { this.handleClick(key.value) }}              >
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

