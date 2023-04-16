import React, { Component } from 'react';
import Keyboard from './keyboard';
import TextArea from './textArea';

class ChangeLang extends Component {
  constructor(props) {
    super(props);
    // console.log('changlang-ctor', props);
  }

  handleChange = (event) => { //change language
    const language = event.target.value;
    this.props.onChange(language);
  }

  render() {
    const { language } = this.props.language;

    return (
      <div>
        <label htmlFor="language">Select language:</label>
        <select id="language" className="language" value={language} onChange={this.handleChange}>
          <option value="english">English</option>
          <option value="hebrew">עברית</option>
        </select>

      </div>
    );
  }
}

export default ChangeLang;
