import React, { Component } from 'react';
import Keyboard from './keyboard';
import ChangeLang from './changeLang';
class TextArea extends Component {
    constructor(props) {
        super(props);
        console.log('textarea-ctor', props);
        this.state = {
            text: this.props.text
        };
    }

    render() {
        return (
            <div>
                <p >{ this.props.text}</p>
            </div>
        );
    }
}

export default TextArea;