import React, { Component } from "react";
import Navbar from '../../components/Navbar';
import UserDash from "../../components/UserDash";
import { connect } from 'react-redux';
import { compose } from 'redux';
import requireAuth from './../../hoc/requireAuth'
import { getUserInfo } from './../../actions/user'
import Background from "../../components/Background";


class Profile extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }


  render() {
    console.log('userdata:', this.props.user)
    return (

      <div className="flex">

        <Navbar />
        <UserDash />
        <Background />

        <div className="card" style={{ display: 'inline-block' }}>
          <div className="displayFriends">
            Email: {<br></br>} {this.props.user.email}
          </div>
        </div>

        <div className="card" style={{ display: 'inline-block' }}>
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