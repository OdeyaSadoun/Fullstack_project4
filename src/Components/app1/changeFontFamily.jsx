import React, { Component } from 'react';
import Keyboard from './keyboard';
import TextArea from './textArea';

class ChangeFontFamily extends Component {
  constructor(props) {
    super(props);
    // console.log('changlang-ctor', props);
  }

  handleChange = (event) => { 
    const fontFamily = event.target.value;
    console.log('change lang', fontFamily)
    this.props.onChange(fontFamily);
  }

  render() {
    const { fontFamily } = this.props;
    ;

    return (
      <div>
        <label htmlFor="font_family">Select font family:</label>
        <select id="font" className="font" value={fontFamily} onChange={this.handleChange}>
          <option value="'Courier New', Courier, monospace">'Courier New', Courier, monospace</option>
          <option value="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif</option>
          <option value="'Times New Roman', Times, serif">'Times New Roman', Times, serif</option>

        </select>

      </div>
    );
  }
}

export default ChangeFontFamily;
