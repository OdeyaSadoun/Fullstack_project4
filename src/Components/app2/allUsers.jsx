import React, { Component } from "react";

// get our fontawesome imports
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AllUsers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row-container">
        {this.props.allUsers.map((user) => (
          <div className="item" key={user}>
            <FontAwesomeIcon className="icon" icon={faUser} />
            <h4>{user}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default AllUsers;
