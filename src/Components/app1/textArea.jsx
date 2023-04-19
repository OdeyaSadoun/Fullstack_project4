import React, { Component } from 'react';
import Keyboard from './keyboard';
import ChangeLang from './changeLang';
class TextArea extends Component {
    constructor(props) {
        super(props);
        console.log('textarea-ctor', props);

    }

    render() {
        const { color, fontSize, fontFamily } = this.props;
        return (
            <div>
                <p style={{ color: color, fontSize: fontSize, fontFamily: fontFamily }} >{this.props.text}</p>
            </div>
        );
    }
}

export default TextArea;