import React, { Component } from "react";
import GameBoard from './gameBoard';
import PlayerList from "./playerList";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      playerName: "",
    };
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
  }

  handleRegistration(event) {
    event.preventDefault();
    const newPlayer = {
      name: this.state.playerName,
      id: Date.now(),
    };
    this.setState({
      players: [...this.state.players, newPlayer],
      playerName: "",
    });
  }

  handlePlayerNameChange(event) {
    this.setState({ playerName: event.target.value });
  }

  render() {
    const { players } = this.state;

    return (
      <div>
        <div>
          <h2>Register</h2>
          <form onSubmit={this.handleRegistration}>
            <label>
              Player Name:
              <input type="text" value={this.state.playerName} onChange={this.handlePlayerNameChange} />
            </label>
            <button type="submit">Register</button>
          </form>
        </div>
        {players.length > 0 && (
          <div>
            <h2>Game Board</h2>
            {players.map((player) => (
              <div key={player.id}>
                <h3>{player.name}'s Game Board</h3>
                <GameBoard />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}



export default Game;
