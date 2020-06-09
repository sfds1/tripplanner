import React, { Component } from "react";
import { Link } from 'react-router-dom';

class User extends Component {

  render() {
    return (


      <div>

      <div style={{ display: 'inline-block' }}>
        <Link to="/signin" className="userBtn">
          SI
        </Link>
        <div className="userBtnTitle"> Sign In </div>
        </div>

        <div style={{ display: 'inline-block' }}>
        <Link to="/signup" className="userBtn">
          SU
        </Link>
        <div className="userBtnTitle"> Sign Up </div>
        </div>

      </div>
    )
  }
};

export default User;