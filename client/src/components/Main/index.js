import React, { Component } from "react";
import { Link } from 'react-router-dom';
import User from "../User";

class Main extends Component {

  componentDidMount() {
    
  }

  render() {
    return (

      <div className="mainPage">

          <img className="logo" src="../../../images/logo.png" alt="logo" />

          <div className="mainTitle">We Trippin'</div>

<User />

      </div>

    )
  }
};

export default Main;