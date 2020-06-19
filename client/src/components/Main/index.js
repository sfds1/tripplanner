import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { fetchFlights } from '../../flightAPI/flightAPI'
import User from "../User";

class Main extends Component {

  componentDidMount() {
    fetchFlights("SanJose", "Chicago", "2020-06-15", "2020-06-16")
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