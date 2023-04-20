import React, { Component } from "react";
import PlayerBoard from "./playerBoard";
import BestPlayer from "./bestPlayer";

class Board extends Component {
  constructor(props) {
    super(props);
    let allUsers = this.props.allUsers.map((user) => ({
      name: user,
      isFinishGame: false,
      scores: [],
      steps: 0,
      number: Math.floor(Math.random() * 98) + 1, ///////random number between 1 to 99
    }));
    this.state = {
      allUsers: allUsers,
      currentUserIndex: 0,
      buttonDisable: true,
      isPopupOpen: false,
    };
    this.handleNewStep = this.handleNewStep.bind(this);
    this.handleChangeTurn = this.handleChangeTurn.bind(this);
    this.handleUserQuit = this.handleUserQuit.bind(this);
    this.handleUserStartNewGame = this.handleUserStartNewGame.bind(this);
    this.handleOpenPopupClick = this.handleOpenPopupClick.bind(this);
  }
  handleNewStep(_newStep) {
    let user = this.state.allUsers[this.state.currentUserIndex];
    let currentUserIndex = this.state.currentUserIndex;

    user.steps += 1;
    switch (_newStep) {
      case "*2": {
        if (user.number * 2 > 100) return;
        user.number *= 2;
        break;
      }
      case "/2": {
        user.number = Math.floor(user.number / 2);

        break;
      }
      case "+1": {
        user.number += 1;
        break;
      }
      case "-1": {
        user.number -= 1;
        break;
      }
      default:
        break;
    }
    if (user.number === 100) {
      this.userWin();
      return;
    }

    let allUsers = [...this.state.allUsers];
    allUsers[this.state.currentUserIndex] = user;
    this.setState({
      allUsers: allUsers,
      currentUserIndex: (currentUserIndex + 1) % allUsers.length,
    });
  }
  userWin() {
    let user = this.state.allUsers[this.state.currentUserIndex];
    user.scores.push(user.steps);
    user.isFinishGame = true;
    let allUsers = [...this.state.allUsers];
    allUsers[this.state.currentUserIndex] = user;
    this.setState({
      allUsers: allUsers,
      buttonDisable: false,
    });
  }

  handleUserQuit() {
    let allUsers = [...this.state.allUsers];
    let currentUserIndex = this.state.currentUserIndex;
    if (currentUserIndex === allUsers.length - 1) {
      currentUserIndex = 0;
    }
    allUsers.splice(this.state.currentUserIndex, 1);

    this.setState({
      allUsers: allUsers,
      currentUserIndex: currentUserIndex,
    });
  }
  handleUserStartNewGame() {
    let user = this.state.allUsers[this.state.currentUserIndex];
    user.isFinishGame = false;
    user.steps = 0;
    let allUsers = [...this.state.allUsers];
    user.number = Math.floor(Math.random() * 98) + 1;
    allUsers[this.state.currentUserIndex] = user;
    this.setState({
      allUsers: allUsers,
      currentUserIndex: (this.state.currentUserIndex + 1) % allUsers.length,
    });
  }
  handleChangeTurn() {
    let playerTurn =
      (this.state.currentUserIndex + 1) % this.props.allUsers.length;
    this.setState({ currentUserIndex: playerTurn });
  }

  handleOpenPopupClick() {
    this.setState({ isPopupOpen: true });
  }
  handleClosePopup = () => {
    this.setState({ isPopupOpen: false });
  };

  render() {
    return (
      <div>
        <button placeholder="" onClick={this.handleOpenPopupClick}>
          Show 3 best players
        </button>

        <div style={{ display: "flex", flexDirection: "row" }}>
          {this.state.allUsers.map((user, index) => (
            <PlayerBoard
              user={user}
              status={
                this.state.currentUserIndex === index ? "enable" : "disable"
              }
              key={index}
              onMakeStep={this.handleNewStep}
              onStartNewGame={this.handleUserStartNewGame}
              onStartQuitGame={this.handleUserQuit}
              onChangeTurn={this.handleChangeTurn}
            />
          ))}
        </div>
        <div className="popup-box">
          {this.state.isPopupOpen && (
            <div className="box">
              <span className="close-icon" onClick={this.handleClosePopup}>
                x
              </span>
              <BestPlayer
                users={this.state.allUsers}
                handleClose={this.handletogglePopup}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Board;
