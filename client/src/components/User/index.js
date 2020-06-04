import React, { Component } from "react";
import { Link } from 'react-router-dom';

class User extends Component {

  render() {
    return (

      <div className="card lobby">
        <Link to="/signin"> <button className="decideBtn">
          Sign In
          </button>
        </Link>

        <Link to="/signup">
          <button className="decideBtn">
            Sign Up
          </button>
        </Link>

      </div>
    )
  }
};

export default User;