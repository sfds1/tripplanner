import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth'
import { getFriendByEmail } from './../../actions/user'


class FindFriend extends Component {

  state = {
    friendSearch: ""
  };


  handleFriendSearch = (e) => {
    const { value } = e.target;
    this.setState({ friendSearch: value });
  };

  // Needs a search for this email parameter
  findFriend = (friendEmail) => {
    return this.props.getFriendByEmail('friendEmail');
  }

  render() {

    this.findFriend('1@1.com')
    console.log(this.props)

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