import React, { Component } from "react";
import { Helmet } from "react-helmet";

import AllUsers from "./allUsers";
import RegisterUser from "./register";


class OpenPage extends Component {
  constructor(props) {
    super(props);
    this.state = { allUsers: [], disableFinish: true };
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
  }
  handleSubmitUser(_newUser) {
    let temp = this.state.allUsers; //[...this.state.allUsers];
    if (temp.includes(_newUser)) {
      return;
    }

    temp.push(_newUser);
    this.setState({ allUsers: temp });
    if (this.state.allUsers === []) {
      this.setState({ disableFinish: true });
    } else {
      this.setState({ disableFinish: false });
    }
  }
  render() {
    return (
      <div className="body">
        <Helmet>
          <title>Gets 100 Game| Welcome</title>
        </Helmet>
        <header>
          <h1>Welcome Get To 100 Game</h1>
        </header>
        <div className="registerUser">
          <RegisterUser onSubmit={this.handleSubmitUser} />
          <button
            onClick={() => this.props.onPressFinish(this.state.allUsers)}
            disabled={this.state.disableFinish}
          >
            finish
          </button>
        </div>
        <AllUsers allUsers={this.state.allUsers} />
      </div>
    );
  }
}

export default OpenPage;
