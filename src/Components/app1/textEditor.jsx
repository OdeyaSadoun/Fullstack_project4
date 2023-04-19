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
      language: 'english',
      color: 'black',
      capslock: false,
      delete: false,
      setIsDelete: '',
      setIsNotDelete: '',
      fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, 'sans serif'",
      fontSize: 15
    }
  }

  handleIsDelete = () => {
    this.setState({ delete: true });
  }
  handleIsNotDelete = () => {
    this.setState({ delete: false });
  }

  handleClickTextArea = (text) => {
    if (this.state.delete) {
      this.setState({ text: text });
    } else {
      this.setState({ text: this.state.text + text });
    }
  }

  handleButtonSpecialSettingClick = (text) => {
    console.log('special-buttons', text);
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

  handleFontFamilyChange = (fontFamily) => {
    console.log(fontFamily);
    this.setState({ fontFamily: fontFamily });
  }

  render() {
    const { language, color, fontSize, fontFamily } = this.state;
    return (
      <div className="keyboard-container">
        <TextArea text={this.state.text} color={color} fontSize={fontSize} fontFamily={fontFamily} />
        <ChangeLang language={language} onChange={this.handleLanguageChange} />
        <Keyboard language={language} text={this.state.text} onIsDelete={this.handleIsDelete} onIsNotDelete={this.handleIsNotDelete} setDelete={this.isDelLastOneFunc} onClick={this.handleClickTextArea} />
        <Size fontSize={fontSize} onClick={this.changeFontSize} />
        <ChangeFontFamily fontFamily={fontFamily} onChange={this.handleFontFamilyChange} />
        <ColorPalette onClick={this.onHandleChangeColor} />
        <SpecialSetting language={language} text={this.state.text} onClick={this.handleButtonSpecialSettingClick} />
      </div>
    );
  }
}

export default TextEditor;