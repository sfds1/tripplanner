import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Refresh from '../../components/Refresh';
import Back from '../../components/Back';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth'
import { getUserInfo } from './../../actions/user'

class Profile extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }


  render() {
    console.log('userdata:', this.props.user)
    return (

      <div>

        <Back />
        <Refresh />

        <div className="tripHeader">Profile</div>

        <div className="card">
          <div className="displayFriends">
            Email: {<br></br>} {this.props.user.email}
          </div>

          <br></br>

          <div className="displayFriends">
            Friends: {<br></br>} {this.props.user.friends}
          </div>

        </div>
      </div>

    )
  }
};

function mapStateToProps(state) {
  return { user: state.user.userData }
}

export default compose(
  requireAuth,
  connect(mapStateToProps, { getUserInfo })
)(Profile);