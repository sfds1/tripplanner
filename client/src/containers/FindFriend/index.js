import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth'
import { getFriendByEmail } from './../../actions/user'


class FindFriend extends Component {

  // Needs a search for this email parameter
  findFriend = (friendEmail) => {
    return this.props.getFriendByEmail(friendEmail);
  }

  render() {
    // this.findFriend('1@1.com')
    this.props.getFriendByEmail('1@1.com')
    console.log(this.props)
    return (
      <div>

        Find Friend Page

      </div>

    )
  }
};

function mapStateToProps(state) {
  return { friend: state.user.friendData }
}

export default compose(
  requireAuth,
  connect(mapStateToProps, { getFriendByEmail })
)(FindFriend);