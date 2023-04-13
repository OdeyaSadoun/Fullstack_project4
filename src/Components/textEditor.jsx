import React, { Component } from 'react';
import Keyboard from './keyboard';
import Size from './sizes';
import TextArea from './textArea';
import ColorPalette from './colorPalette';
import SpecialSetting from './specialSetting';

class TextEditor extends Component {
  render() {
    return (
      <div className="keyboard-container">
        <TextArea />
        <Keyboard />
        <Size />
        <ColorPalette />
        <SpecialSetting />

      </div>
    );
  }


}

export default TextEditor;