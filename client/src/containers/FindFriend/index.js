import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth'
import { getFriendByEmail } from './../../actions/user'


class FindFriend extends Component {

  // Currently just to show that the function works
  // This componentDidMount should be changed to an onSubmit once we have a search available
  // The '1@1.com is a placeholder for the searched friend's email
  componentDidMount = () => {
    return this.props.getFriendByEmail('1@1.com');
  }

  render() {
    console.log(this.props.friend)
    return (
      <div>

        <form onSubmit={(e) => this.handleFriendSearch(e)}>
          <div>
            <input
              id="friendSearch"
              className="formBox"
              onChange={this.handleFriendSearch}
              value={this.state.friendSearch}
              placeholder="Search for a Friend"
              type="text"
            />
          </div>
        </form>

        <button
          className="searchBtn"
          onClick={this.findFriend}>
          Search
        </button>

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