import React, { Component } from "react";
import { Link } from 'react-router-dom';

class User extends Component {

  render() {
    return (

      <div className="card" style={{display: 'inline-block'}}>
        <Link to="/signin" className="userBtn">
          Sign In
        </Link>
        
        <Link to="/signup" className="userBtn">
            Sign Up
        </Link>

      </div>
    )
  }
};

export default User;