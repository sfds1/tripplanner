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
          <span>
            Email: {this.props.user.email}
          </span>

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