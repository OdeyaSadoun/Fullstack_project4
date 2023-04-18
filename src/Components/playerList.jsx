import React, { Component } from "react";

class PlayerList extends Component {
  render() {
    const { players, activePlayerIndex } = this.props;

    return (
      <ul>
        {players.map((player, index) => (
          <li key={player.id}>
            {player.name}
            {index === activePlayerIndex ? <span> (active)</span> : <span> (inactive)</span>}
          </li>
        ))}
      </ul>
    );
  }
}


export default PlayerList;