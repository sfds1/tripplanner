import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Main extends Component {

  render() {
    return (

      <div>
        <Link to="/user">

          <div className="mainPage">
            <img className="logo" src="../../../images/logo-1.png" alt="logo" />
          </div>

        </Link>
      </div>

    )
  }
};

export default Main;