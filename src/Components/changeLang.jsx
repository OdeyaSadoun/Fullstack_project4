import React, { Component } from 'react';

class ChangeLang extends Component {
  state = {
    language: 'English', // Default language
  }

  handleLanguageChange = (event) => {
    this.setState({ language: event.target.value });
  }

  render() {
    const { language } = this.state;

    return (
      <div>
        <label htmlFor="language">Select language:</label>
        <select id="language" name="language" value={language} onChange={this.handleLanguageChange}>
          <option value="English">English</option>
          <option value="Hebrew">Hebrew</option>
        </select>
      </div>
    );
  }
}

export default ChangeLang;
