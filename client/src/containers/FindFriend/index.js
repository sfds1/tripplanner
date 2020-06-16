import React, { Component } from "react";
import Refresh from '../../components/Refresh';
import Back from '../../components/Back';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth'
import { getFriendByEmail } from './../../actions/user'


class FindFriend extends Component {

  state = {
    friendSearch: "",
    friendResults: "Names Here"
  };

  // handleSubmit = (val) => {
  //   this.findFriend(val);
  //   console.log(this.props)
  // }

  handleFriendSearch = (e) => {
    const { value } = e.target;
    this.setState({ friendSearch: value });
    this.props.getFriendByEmail(value)
  };

  renderFriend = () => {
    return this.props.friend !== null ? <div> {this.props.friend.email} </div> : <div>No friend with that email</div>
  }


  render() {
    return (
      <div>

        <Back />
        <Refresh />

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
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

        <br></br>

        <span className="displayFriends">
          Friends: {this.state.friendResults}
        </span>
        
        {this.renderFriend}
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