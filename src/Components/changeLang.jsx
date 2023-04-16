import React, { Component } from 'react';
import Keyboard from './keyboard';

class ChangeLang extends Component {
  state = {
    language: 'english', // Default language
  }

  handleLanguageChange = (event) => {
    this.setState({ language: event.target.value });
  }

  render() {
    const { language } = this.state;

    return (
      <div>
        <label htmlFor="language">Select language:</label>
        <select id="language" className="language" value={language} onChange={this.handleLanguageChange}>
          <option value="english">English</option>
          <option value="hebrew">Hebrew</option>
        </select>
        <Keyboard language={language} />
      </div>
    );
  }
}

export default ChangeLang;
