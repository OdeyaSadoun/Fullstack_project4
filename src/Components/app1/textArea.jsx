import React, { Component } from 'react';
import Keyboard from './keyboard';
import ChangeLang from './changeLang';
class TextArea extends Component {
    constructor(props) {
        super(props);
        console.log('textarea-ctor', props);

    }


    render() {
        return (
          <div className="textarea">
            {this.props.text.map((word, index) => (
              <span key={index} style={{ color: word.color, fontSize: word.fontSize, fontFamily: word.fontFamily }}>
                {word.value}
              </span>
            ))}
          </div>
        );
      }
}

export default TextArea;

