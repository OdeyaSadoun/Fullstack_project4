import React, { Component } from "react";

class BestPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        name: "",
        score: 0,
      },
      places: this.props.users.sort((a, b) => b.score - a.score),
    };

  }


  showBestPlayers() {
    let users = this.props.users;
    let usersScores = [];
    for (let user of users) {
      for (let score of user.scores) {
        usersScores.push({ name: user.name, score: score });
      }
    }
    usersScores.sort((a, b) => a.score - b.score);
    return (
      <div className="leaderboard-container">
        {usersScores[0] && (
          <div className="leaderboard-item first-place">
            <h1>First Place:</h1>
            <h3>{usersScores[0].name}</h3>
            <h3>Score: {usersScores[0].score}</h3>
          </div>
        )}
        {usersScores[1] && (
          <div lassName="leaderboard-item second-place">
            <h1>Second Place:</h1>
            <h3>{usersScores[1].name}</h3>
            <h3>Score: {usersScores[1].score}</h3>
          </div>
        )}
        {usersScores[2] && (
          <div className="leaderboard-item third-place">
            <h1>third Place:</h1>
            <h3>{usersScores[2].name}</h3>
            <h3>Score: {usersScores[2].score}</h3>
          </div>
        )}
        {usersScores.length === 0 && (
          <div className="leaderboard-empty">There is no best players yet</div>
        )}
      </div>
    );
  }

  render() {
    return (
      this.showBestPlayers()
    );
  }
}

export default BestPlayer;
