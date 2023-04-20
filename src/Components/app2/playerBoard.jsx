import React, { Component } from "react";
import GradientButton from "react-linear-gradient-button";


class PlayerBoard extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let status = this.props.status;
    let statusStyle = {
      color: status === "disable" ? "red" : "green",
    };
    return (
      <div className="playerBoard">
        <h2>
          palyer: {this.props.user.name}{" "}
          <span style={statusStyle}>{status}</span>
        </h2>
        <div className="button-act">
          <button
            className="gradient-button"
            disabled={status === "disable" ? true : false}
            onClick={() => this.props.onMakeStep("*2")}
          >
            *2
          </button>
          <button
            className="gradient-button"
            disabled={status === "disable" ? true : false}
            onClick={() => this.props.onMakeStep("/2")}
          >
            /2
          </button>
          <button
            className="gradient-button"
            disabled={status === "disable" ? true : false}
            onClick={() => this.props.onMakeStep("-1")}
          >
            -1
          </button>
          <button
            className="gradient-button"
            disabled={status === "disable" ? true : false}
            onClick={() => this.props.onMakeStep("+1")}
          >
            +1
          </button>
        </div>
        <h4>{"Score: " + this.props.user.scores}</h4>
        <h4>{"Steps:" + this.props.user.steps}</h4>
        <h4>{"Number:" + this.props.user.number}</h4>
        {this.props.user.isFinishGame && (
          <React.Fragment>
            <button onClick={() => this.props.onStartNewGame()}>
              new game
            </button>
            <button onClick={() => this.props.onStartQuitGame()}>quit</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default PlayerBoard;
