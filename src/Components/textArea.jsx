import React, { Component } from 'react';
import Keyboard from './keyboard';
import ChangeLang from './changeLang';
class TextArea extends Component {
    constructor(props) {
        super(props);
        console.log('textarea-ctor', props);
        this.state = {
            text: ''
        };
    }
    updateText = (value) => {
        this.setState({
            text: this.state.text + value
        });
    }
    render() {
        return (
            <div>
                <p >{this.state.text}</p>
            </div>
        );
    }
}

export default TextArea;