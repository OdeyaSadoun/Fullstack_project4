import React, { Component } from 'react';
import Keyboard from './keyboard';
import TextArea from './textArea';

class ChangeFontFamily extends Component {
  constructor(props) {
    super(props);
    // console.log('changlang-ctor', props);
  }

  handleChange = (event) => { //change language
    const language = event.target.value;
    this.props.onChange(language);
  }

  render() {
    const { fontFamily } = this.props
    ;

    return (
      <div>
        <label htmlFor="language">Select language:</label>
        <select id="font" className="font" value={fontFamily} onChange={this.handleChange}>
          <option value="Courier_New_Courier_monospace">'Courier New', Courier, monospace</option>
          <option value="Franklin_Gothic_Medium_Arial_Narrow_Arial_sans-serif">'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif</option>
          <option value="Times New Roman_Times_serif">'Times New Roman', Times, serif</option>

        </select>

      </div>
    );
  }
}

export default ChangeFontFamily;
