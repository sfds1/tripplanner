import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { fetchFlights } from '../../flightAPI/flightAPI'


class Main extends Component {

  componentDidMount() {
    fetchFlights("SanJose", "Chicago", "2020-06-15", "2020-06-16")
  }

  render() {
    return (

      <div className="mainPage">

        <Link to="/user">

          <img className="logo" src="../../../images/logo.png" alt="logo" />

          <div className="mainTitle">We Trippin'</div>

        </Link>

      </div>

    )
  }
};

export default Main;