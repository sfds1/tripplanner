import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Refresh extends Component {

  render() {
    return (

      <div>

        <Link className="refreshBtn" onClick={() => window.location.reload(false)}>⭮</Link>

      </div>

    )
  }
};

export default Refresh;