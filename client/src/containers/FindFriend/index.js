import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import Refresh from '../../components/Refresh';
import Back from '../../components/Back';

import requireAuth from './../../hoc/requireAuth'
import { getFriendByEmail } from './../../actions/user'
import axios from "axios";


class FindFriend extends Component {

  onSubmit = async ({ text }) => {
    await this.props.getFriendByEmail(text)
    console.log(this.props.friend)
  }

  renderInput = ({ input, meta }) => {
    return (
      <input
        {...input}
        className="formBox"
        placeholder="Search for a Friend"
        type="text"
      />
    )
  }

  handleAdd = async () => {
    // const { _id } = this.props.friend
    await axios.post('/api/user', this.props.friend, { headers: { 'authorization': localStorage.getItem('token') } })
    alert('Friend Added')
    console.log(this.props.user)
  }
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Back />
        <Refresh />
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field
              name='text'
              component={this.renderInput}
            />
          </div>
          <button
            className="searchBtn"
            type='submit'
            onClick={this.findFriend}>
            Search
          </button>
        </form>


        <br></br>

        <span onClick={this.handleAdd} className="displayFriends">
          Friends: {this.props.friend.email}
          <br/>
        </span>
          (click to add)
        
      </div>

    )
  }
};

function mapStateToProps(state) {
  return { friend: state.user.friendData }
}

export default compose(
  requireAuth,
  reduxForm({ form: 'findFriend' }),
  connect(mapStateToProps, { getFriendByEmail })
)(FindFriend);