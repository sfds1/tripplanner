import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Refresh extends Component {

  render() {
    return (

      <div className="inlineBox">

        <Link
          to={window.location.pathname}
          onClick={() => window.location.reload(false)}
        >

          <img className="refreshBtn" src="../../../images/refresh.png" alt="" />

        </Link>

      </div>

    )
  }
};

export default Refresh;