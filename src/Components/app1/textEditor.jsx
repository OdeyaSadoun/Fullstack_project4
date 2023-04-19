import React, { Component } from 'react';
import Keyboard from './keyboard';
import Size from './sizes';
import TextArea from './textArea';
import ColorPalette from './colorPalette';
import SpecialSetting from './specialSetting';
import ChangeLang from './changeLang';
import ChangeFontFamily from './changeFontFamily';

class TextEditor extends Component {
  constructor(props) {
    super(props);
    console.log('textEditor-ctor', props);
    this.state = {
      text: '',
      setText: '',
      language: 'english',
      color: 'black',
      capslock: false,
      fontFamily: "'Franklin Gothic Medium', Arial Narrow', Arial 'sans serif'",
      fontSize: 11
    }
  }
  setTextFunc = (text) => {
    this.state.text = text;
  }

  handleClickTextArea = (text) => {
    this.setState({
      text: this.state.text + text
    });
  }

  handleButtonSpecialSettingClick = (text) => {
    console.log('special-buttons', text)
    this.setState({ text: text });
  }
  // function to update the color displayed in Component A
  onHandleChangeColor = (color) => {
    console.log('textEditor-color', color);
    this.setState({ color: color });
  }

  // function to update the font size displayed in Component A
  changeFontSize = (fontSize) => {
    this.setState({ fontSize: fontSize });
  }

  handleLanguageChange = (language) => {
    this.setState({ language: language, capslock: false });
  }

  render() {
    const { language, color, fontSize, fontFamily } = this.state;
    return (
      <div className="keyboard-container">
        <TextArea text={this.state.text} color={color} fontSize={fontSize} />
        <ChangeLang language={language} onChange={this.handleLanguageChange} />
        <Keyboard language={language} text={this.state.text} onClick={this.handleClickTextArea} />
        <Size fontSize={fontSize} onClick={this.changeFontSize} />
        <ChangeFontFamily fontFamily={fontFamily}/>
        <ColorPalette onClick={this.onHandleChangeColor} />
        <SpecialSetting language={language} text={this.state.text} setText={this.setTextFunc} onClick={this.handleButtonSpecialSettingClick} />
      </div>
    );
  }
}

export default TextEditor;