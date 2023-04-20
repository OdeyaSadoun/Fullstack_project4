import React, { Component } from "react";


class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: "",
      message: "",
      buttonDisable: true,
    };
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value });

    if (event.target.value === "") {
      this.setState({ buttonDisable: true });
    } else {
      this.setState({ buttonDisable: false });
    }
  };

  handleTextChange = () => {
    this.props.onSubmit(this.state.newUser);
    this.setState({ message: "", buttonDisable: true });
  };

  render() {
    return (
      <div>
        <input
          className="btn-register"
          type="text"
          placeholder="user name" 
          value={this.state.message}
          onChange={this.handleChange}
          onBlur={(event) => this.setState({ newUser: event.target.value })}
        />
        <button
          className="btn-register"
          onClick={this.handleTextChange}
          disabled={this.state.buttonDisable}
        >
          add user
        </button>
      </div>
    );
  }
}

export default RegisterUser;
