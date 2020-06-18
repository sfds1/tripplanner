import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  render() {
    return (

      <div>

        <div style={{ display: 'inline-block' }}>

          <Link to="/profile" className="userBtn">
            <img className="userIcons" src="../../../images/profile.png" alt="" />
          </Link>
          <div className="userBtnTitle"> Profile</div>

          <Link to="/trips" className="userBtn">
            <img className="userIcons" src="../../../images/trips.png" alt="" />
          </Link>
          <div className="userBtnTitle"> Trips </div>

        </div>

        <div style={{ display: 'inline-block' }}>

          <Link to="/findfriend" className="userBtn">
            <img className="userIcons" src="../../../images/findFriend.png" alt="" />
          </Link>
          <div className="userBtnTitle"> Find Friend </div>

          <Link to="/newtrip" className="userBtn">
            <img className="userIcons" src="../../../images/newTrip.png" alt="" />
          </Link>
          <div className="userBtnTitle"> New Trip </div>

        </div>

      </div>

    )
  }
};

export default Dashboard;