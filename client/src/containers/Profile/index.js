import React, { Component } from "react";
import { connect } from 'react-redux';

import { getUserInfo } from './../../actions/user'

class Profile extends Component {
  componentDidMount() {

  }

  render() {
    return (

      <div>

        Profile Page

      </div>

    )
  }
};

function mapStateToProps(state) {
  return { user: state.user.user }
}

export default Profile;