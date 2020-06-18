import React, { Component } from "react";
import { Link } from 'react-router-dom';

class UserDash extends Component {

  render() {
    return (

      <div className="userDash">

        <div style={{ display: 'inline-block' }}>

          <Link to="/profile" className="userDashBtn">
            <img className="userDashIcons" src="../../../images/profile.png" alt="" />
          </Link>

        </div>

        <div style={{ display: 'inline-block' }}>

          <Link to="/findfriend" className="userDashBtn">
            <img className="userDashIcons" src="../../../images/findFriend.png" alt="" />
          </Link>

        </div>

        <div style={{ display: 'inline-block' }}>

          <Link to="/trips" className="userDashBtn">
            <img className="userDashIcons" src="../../../images/trips.png" alt="" />
          </Link>

        </div>

        <div style={{ display: 'inline-block' }}>

          <Link to="/newtrip" className="userDashBtn">
            <img className="userDashIcons" src="../../../images/newTrip.png" alt="" />
          </Link>

        </div>

        <div style={{ display: 'inline-block' }}>

          <Link to="/flights" className="userDashBtn">
            <img className="userDashIcons" src="../../../images/plane.png" alt="" />
          </Link>

        </div>

        <div style={{ display: 'inline-block' }}>

          <Link to="/hotspots" className="userDashBtn">
            <img className="userDashIcons" src="../../../images/star.png" alt="" />
          </Link>

        </div>

      </div>

    )
  }
};

export default UserDash;