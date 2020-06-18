import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Back extends Component {

  render() {
    return (

      <div>

        <Link to="/dashboard">
          <img className="backBtn" src="../../../images/back.png" alt="" />
      </Link>

      </div>

    )
  }
};

export default Back;