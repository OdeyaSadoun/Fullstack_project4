import React, { Component } from 'react';
import Keyboard from './keyboard';
import Size from './sizes';
import TextArea from './textArea';
import ColorPalette from './colorPalette';
import SpecialSetting from './specialSetting';
import ChangeLang from './changeLang';

class TextEditor extends Component {
  state = {
    text: '',
    setText: '',
    deleteClicked: false,
    setDeleteClicked: false,
    language: 'english'
  }

  // handleTextChange(newText) {
  //   setText(newText);
  // }

  // handleDeleteClick() {
  //   setDeleteClicked(true);
  // }

  render() {
    return (
      <div className="keyboard-container">
        <TextArea  value={this.state.text} />
        <ChangeLang />
        {/* <Keyboard   /> */}
        <Size />
        <ColorPalette />
        <SpecialSetting />

      </div>
    );
  }


}

export default TextEditor;