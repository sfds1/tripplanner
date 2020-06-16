import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Back extends Component {

  render() {
    return (

      <div>

        <Link to="/dashboard" className="backBtn">
          {/* <img className="backBtn" src="../../../images/logo-1.png" alt="logo" /> */}
      ↼
      </Link>

      </div>

    )
  }
};

export default Back;