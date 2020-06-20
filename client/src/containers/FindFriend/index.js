import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import Navbar from "../../components/Navbar";
import UserDash from "../../components/UserDash";
import requireAuth from './../../hoc/requireAuth'
import { getFriendByEmail } from './../../actions/user'
import axios from "axios";
import Background from "../../components/Background";


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
    console.log(this.props.friend)
    // const { _id } = this.props.friend
    await axios.post('/api/user', this.props.friend, { headers: { 'authorization': localStorage.getItem('token') } })
    alert('Friend Added')
    console.log(this.props.user)
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="flex">

        <Navbar />
        <UserDash />
        <Background />

        <div className="card">

          <div className="cardTitle">
            Find Friends
          </div>

          <div className="formBox">
            <form autoComplete="off" onSubmit={handleSubmit(this.onSubmit)}>
              <div>
                <Field
                  name='text'
                  autoComplete='off'
                  component={this.renderInput}
                />
              </div>
              <Button
                className="searchBtn"
                type='submit'
                onClick={this.findFriend}>
                Search
              </Button>
            </form>
          </div>
        </div>

        <div className="card">

          <div className="cardTitle">
            Searched Friends
          </div>

          <div onClick={this.handleAdd} className="displaySearched">
            {this.props.friend.email}
          </div>
        </div>

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