import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from '../../hoc/requireAuth'
import { getFriendByEmail } from '../../actions/user'


class CurrentTrip extends Component {

  onSubmit = async (formValues, dispatch) => {
    try {
      const { data } = await axios.post('/api/trip', formValues,  { headers: { 'authorization': localStorage.getItem('token')}});
      console.log(data);
      // dispatch({ type: CREATE_TRIP, payload: data });
      this.props.history.push('/currenttrip');
    } catch (e) {
      // dispatch({ type: CREATE_TRIP_ERROR, payload: e });
    }
  }

  renderInput = (field) => {
    return (
      <div>
        <label>
          {field.label}
        </label>
        <input
          {...field.input}
          className="formBox"
          placeholder={field.placeholder}
          type="text"
        />
      </div>
    )
  }

  render() {

    console.log(this.props)
    const { handleSubmit } = this.props;

    return (
      <div>
        <span></span>

        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field
              placeholder="Name Trip"
              name='title'
              label="Name of the trip"
              component={this.renderInput}
            />
          </div>

          <button
            className="searchBtn"
            type="submit">
            Create
        </button>
        </form>

        <br></br>

        <span className="displayFriends">
          Friends:
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
  reduxForm({ form: 'createTrip' }),
  connect(mapStateToProps, { getFriendByEmail })
)(CurrentTrip);