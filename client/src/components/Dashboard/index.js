import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  render() {
    return (

      <div>

        <div style={{ display: 'inline-block' }}>
          <Link to="/profile" className="userBtn">P</Link>
          <div className="userBtnTitle"> Profile</div>
        </div>

        <div style={{ display: 'inline-block' }}>
        <Link to="/findfriend" className="userBtn"> FF</Link>
        <div className="userBtnTitle"> Find Friend </div>
        </div>

        <div style={{ display: 'inline-block' }}>
        <Link to="/trips" className="userBtn"> T</Link>
        <div className="userBtnTitle"> Trips </div>
        </div>

        <div style={{ display: 'inline-block' }}>
        <Link to="/newtrip" className="userBtn"> NT</Link>
        <div className="userBtnTitle"> New Trip </div>
        </div>
      </div>

    )
  }
};

export default Dashboard;