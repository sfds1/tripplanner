import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Back extends Component {

  render() {
    return (

      <div className="inlineBox">

        <Link
          onClick={this.props.history.goBack}
        >

          <img className="backBtn" src="../../../images/back.png" alt="" />

        </Link>

      </div>

    )
  }
};

export default withRouter(Back) 