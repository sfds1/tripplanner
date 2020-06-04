import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  render() {
    return (

      <div className="card" style={{ display: 'inline-block' }}>

        <Link to="/signin" className="userBtn"> Hi </Link>
        <Link to="/signin" className="userBtn"> Bye </Link>

      </div>

    )
  }
};

export default Dashboard;