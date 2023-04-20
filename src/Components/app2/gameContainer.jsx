import React, { Component } from "react";
import Board from "./board";
import { Helmet } from "react-helmet";

import OpenPage from "./openPage";

class Gamecontainer extends Component {
  constructor() {
    super();
    this.state = {
      allUsers: [],
      maindiv: OpenPage,
    };
    this.handleFinishRegisterBtn = this.handleFinishRegisterBtn.bind(this);
  }

  handleFinishRegisterBtn(allUserNew) {
    this.setState({ allUsers: allUserNew });
    this.setState({ maindiv: "Board" });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Gets 100 Game| Home</title>
        </Helmet>

        {this.state.maindiv === "Board" ? (
          <div>
            <Board allUsers={this.state.allUsers} />
          </div>
        ) : (
          <OpenPage onPressFinish={this.handleFinishRegisterBtn} />
        )}
      </div>
    );
  }
}

export default Gamecontainer;
