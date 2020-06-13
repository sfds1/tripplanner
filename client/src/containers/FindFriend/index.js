import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth'
import { getFriendByEmail } from './../../actions/user'


class FindFriend extends Component {

  // Currently just to show that the function works
  // This componentDidMount should be changed to an onSubmit once we have a search available
  componentDidMount = () => {
    return this.props.getFriendByEmail('1@1.com');
  }

  render() {
    console.log(this.props.friend)
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