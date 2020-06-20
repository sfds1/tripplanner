import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import { Dropdown, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Navbar from "../../components/Navbar";
import UserDash from "../../components/UserDash";
import Background from "../../components/Background";
import requireAuth from '../../hoc/requireAuth';
import { getTripById } from './../../actions/trips';
import { getUserInfo, getFriendByEmail } from './../../actions/user';
import { GET_TRIP_BY_ID } from '../../actions/types'


class CurrentTrip extends Component {

  // state = { searchQuery: '' }

  componentDidMount = async () => {
    await this.props.getTripById(this.props.match.params.id);
    await this.props.getUserInfo();
  }

  renderTrip = () => {
    const { title, city, users, startDate, endDate } = this.props.currentTrip;
    return (
      <div>
        <div className="tripMainTab"> {title} </div>
        <div className="tripInfoTab"> {city}: {startDate} - {endDate}</div>
      </div>
    )
  }

  handleDelete = async (id) => {
    await axios.delete(`/api/category/byId/${id}`, { headers: { 'authorization': localStorage.getItem('token') } })
    window.location.reload(false)
  }

  renderCategories = () => {
    if (!this.props.currentTrip || this.props.currentTrip.categories.length === 0) {
      return <div className="displayFriends"> No Categories Yet </div>
    } else {
      return this.props.currentTrip.categories.map(({ _id, title }) => {
        return (
          <div key={_id}>
            <Link to={{ pathname: `/currentCategory/${_id}` }}>
              <div className="categoryBtn">{title}</div>
            </Link>
            <button
              className="deleteBtn"
              type="submit"
              onClick={() => this.handleDelete(_id)}>
              <img className="deleteIcon" src="../../../images/trash.png" alt="" />
            </button>
          </div>
        )
      })
    }
  }

  onSubmit = async (formValues, dispatch) => {
    const { _id } = this.props.currentTrip;
    try {
      console.log('hit')
      const { data } = await axios.post(`/api/category/all/${_id}`, formValues, { headers: { 'authorization': localStorage.getItem('token') } });
      console.log(data);
      // dispatch({ type: GET_USER_TRIPS, payload: data });
      // this.props.history.push('/currenttrip');
    } catch (e) {
      // dispatch({ type: GET_USER_TRIPS_ERROR, payload: e });
    }
  }

  renderInput = (field) => {
    return (
      <div>
        <input
          {...field.input}
          placeholder={field.placeholder}
          type="text"
        />
      </div>
    )
  }
  renderFriends = () => {
    return (
      <div>
        {this.props.currentTrip.users?.map(({_id, email}) => <div key={_id}>{email}</div>)}
      </div>
    )
  }

  // handleChange = (e, { searchQuery, value }) =>
  //   this.setState({ searchQuery, value })

  // handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

  addFriend = async (formValues, dispatch) => {
    this.props.user.friends.forEach(async (friend) => {
      if (friend.email === formValues.text) {
        console.log(friend)
        const { _id } = this.props.currentTrip
        const { data } = await axios.put(`/api/trip/${_id}`, { friendId: friend._id }, { headers: { 'authorization': localStorage.getItem('token') } })
        dispatch({ type: GET_TRIP_BY_ID, payload: data })
        alert('Friend Added to Trip!')
      }
    })
  }


  render() {
    console.log('Trip Info', this.props.currentTrip)
    console.log('User Info', this.props.user)
    const { handleSubmit } = this.props;
    // const { searchQuery, value } = this.state
    return (
      <div className="flex">

        <Navbar />
        <UserDash />
        <Background />

        <div className="card">

          <div className="cardTitle">
            Friends on Trip
          </div>
          <div className="displayInfo">{this.renderFriends()}</div>

          <div className="cardTitle">
            Current Trip
            </div>

          <div>{this.renderTrip()}</div>
          {this.renderCategories()}
        </div>


      <div className="card">

        <div className="cardTitle">
          Add Friend to Trip
            </div>

        <div className="formBox">
          <form autoComplete="off" onSubmit={handleSubmit(this.addFriend)}>
            <div>
              <Field
                placeholder='Friend Email'
                name='text'
                autoComplete='off'
                component={this.renderInput}
              />
            </div>
            <Button
              className="searchBtn"
              type='submit'
              onClick={this.findFriend}>
              Add Friend
              </Button>
          </form>
        </div>

        <div className="cardTitle">
          Create Category
            </div>

        <div className="formBox">

          <form onSubmit={handleSubmit(this.onSubmit)}>

            <div>
              <Field
                placeholder="Category Name"
                name='title'
                label="Name of the Category"
                component={this.renderInput}
              />
            </div>


            <button
              className="searchBtn"
              type="submit"
              onClick={() => window.location.reload(false)}>
              Create
              </button>

          </form>

        </div>
      </div>

</div>

    )
  }
};

function mapStateToProps(state) {
  return { currentTrip: state.trips.currentTrip, user: state.user.userData, friend: state.user.friendData }
}

export default compose(
  reduxForm({ form: 'category' }),
  connect(mapStateToProps, { getTripById, getUserInfo, getFriendByEmail }),
  requireAuth
)(CurrentTrip);