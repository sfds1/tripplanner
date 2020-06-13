import React, { Component } from "react";
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

        Profile Page

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