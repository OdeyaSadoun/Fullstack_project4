import React, { Component } from 'react';
class TextArea extends Component {
    state = {
        text: 'This is the text from keyboard'
    }
    render() {
        return (
            <p >{this.state.text}</p>
        );
    }
}

export default TextArea;