import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { fetchFlights } from '../../flightAPI/flightAPI'
class Main extends Component {

  componentDidMount() {
    
    fetchFlights("SanJose", "Chicago", "2020-06-15", "2020-06-16" )

  }

  render() {
    return (

      <div className="mainTitle">
        <Link to="/user">

          <div className="mainPage">
            <img className="logo" src="../../../images/logo-1.png" alt="logo" />
          </div>

          <div className="mainTitle">We Trippin'</div>

        </Link>
      </div>

    )
  }
};

export default Main;