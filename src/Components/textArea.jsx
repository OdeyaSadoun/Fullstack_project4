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
        const {color} = this.props;
        return (
            <div>
                <p style={{color: color}} >{ this.props.text}</p>
            </div>
        );
    }
}

export default TextArea;