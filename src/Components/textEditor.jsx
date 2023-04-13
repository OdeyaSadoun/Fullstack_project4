import React, { Component } from 'react';


class TextEditor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: '',
        language: 'english',
      };
    }
  
    handleChange = (event) => {
      this.setState({ text: event.target.value });
    };

    handleLanguageChange = (event) => {
      this.setState({ language: event.target.value });
    };
  
    handleSave = () => {
      // TODO: Implement file saving logic
    };
  
    render() {
      return (
        <div>
          <textarea value={this.state.text} onChange={this.handleChange} />
          <button onClick={this.handleSave}>Save</button>
        </div>
      );
    }


  }
  
export default TextEditor;