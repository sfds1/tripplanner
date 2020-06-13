import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth'
import { getFriendByEmail } from './../../actions/user'


class NewTrip extends Component {

  state = {
    tripName: "Trip Name",
    friendList: "Friends list"
  };


  handleTripName = (e) => {
    const { value } = e.target;
    this.setState({ tripName: value });
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

        <form onSubmit={(e) => this.handleTripName(e)}>
          <div>
            <input
              className="formBox"
              onChange={this.handleTripName}
              value={this.state.tripName}
              placeholder="Name Trip"
              type="text"
            />
          </div>
        </form>

        <button
          className="searchBtn"
          onClick={this.tripName}>
          Create
        </button>

        <br></br>

        <span className="displayFriends">
          Friends: {this.state.friendList}
        </span>

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
)(NewTrip);