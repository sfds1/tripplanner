import React, { Component } from "react";

import Refresh from "../Refresh";
import Back from '../../components/Back';

class Navbar extends Component {

  render() {
    return (

      <div className="navbar">

        <Back />

       <span className="navTitle"> We Trippin'</span>

        <Refresh />

      </div>

    )
  }
};

export default Navbar;