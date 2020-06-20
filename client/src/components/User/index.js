import React, { Component } from "react";
import { Link } from 'react-router-dom';

class User extends Component {

  render() {
    return (

      <div>

        <div style={{ display: 'inline-block' }}>
          <Link to="/signin" className="userBtn">
          <img className="userIcons" src="../../../images/signin.png" alt="" />
        </Link>
          <div className="userBtnTitle"> Sign In </div>
        </div>

        <div style={{ display: 'inline-block' }}>
          <Link to="/signup" className="userBtn">
          <img className="userIcons" src="../../../images/signup.png" alt="" />
        </Link>
          <div className="userBtnTitle"> Sign Up </div>
        </div>

      </div>
    )
  }
};

export default User;