import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  render() {
    return (

      <div className="card">

        <div style={{ display: 'inline-block' }}>

          <Link to="/profile" className="userBtn"> Profile </Link>
          <Link to="/findfriend" className="userBtn"> Find Friend </Link>
        </div>

        <div style={{ display: 'inline-block' }}>
          <Link to="/trips" className="userBtn"> Trips </Link>
          <Link to="/newtrip" className="userBtn"> New Trip </Link>
        </div>
      </div>

    )
  }
};

export default Dashboard;