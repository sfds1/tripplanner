import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import Navbar from '../../components/Navbar';
import UserDash from "../../components/UserDash";
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';
import requireAuth from '../../hoc/requireAuth'
import { getUserTrips } from './../../actions/trips'

import Background from "../../components/Background";

class NewTrip extends Component {

  componentDidMount() {
    this.props.getUserTrips();
   }

  onSubmit = async (formValues, dispatch) => {
    try {
      console.log(formValues, "formValues")
      const { data } = await axios.post('/api/trip', formValues, { headers: { 'authorization': localStorage.getItem('token') } });
      console.log(data);
      // dispatch({ type: GET_USER_TRIPS, payload: data });
      this.props.history.push(`/currenttrip/${data._id}`);
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

  // renderDropdown = (field) => {
  //   return (
  //     <div>
  //       <label>
  //         {field.label}
  //       </label>
  //       <br></br>
  //       <select
  //         {...field.input}
  //         className="formBox"
  //         placeholder={field.placeholder}
  //         type="text"
  //       >
  //         <option>One</option>
  //         <option>Two</option>
  //         <option>Three</option>

  //       </select>
  //     </div>
  //   )
  // }


  render() {

    console.log(this.props)
    const { handleSubmit } = this.props;

    return (
      <div>

        <Navbar />
        <UserDash />
        <Background />

        <div className="card">

          <div className="formBox">
            {/* Title */}
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div>
                <Field
                  placeholder="Name Trip"
                  name='title'
                  label="Name of the trip"
                  component={this.renderInput}
                />
              </div>

              {/* Location */}
              <form onSubmit={handleSubmit(this.onSubmit)} />
              <div>
                <Field
                  placeholder="Location"
                  name='city'
                  label="Where do you want to go?"
                  component={this.renderInput}
                />
              </div>

              {/* Start Date */}
              <div>
                <Field
                  placeholder="Start Date"
                  name='startDate'
                  label="Start Date"
                  component={this.renderInput}
                />
              </div>

              {/* End Date */}
              <div>
                <Field
                  placeholder="End Date"
                  name='endDate'
                  label="End Date"
                  component={this.renderInput}
                />
              </div>


              {/* Friends
            <div>
              <Field
                placeholder="Friends"
                name='users'
                label="Friends"
                component={this.renderDropdown}
              />
            </div> */}

              <button
                className="searchBtn"
                type="submit">
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
  return { trips: state.trips.userTrips }
}

export default compose(
  requireAuth,
  reduxForm({ form: 'trip' }),
  connect(mapStateToProps, { getUserTrips })
)(NewTrip);