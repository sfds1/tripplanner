import React, { Component } from "react";
import Refresh from '../../components/Refresh';
import Back from '../../components/Back';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from '../../hoc/requireAuth'
import { getTripById } from './../../actions/trips'

class CurrentTrip extends Component {

  componentDidMount = async () => {
    await this.props.getTripById(this.props.match.params.id);
  }

  renderTrip = () => {
    const { title, city, startDate, endDate } = this.props.currentTrip;
    return (
      <div>
        <span className="tripMainTab"> {title} </span>
        <br></br>
        <span className="tripMainTab"> {city} </span>
        <br></br>
        <span className="tripInfoTab"> Start: {startDate} </span>
        <br></br>
        <span className="tripInfoTab"> End: {endDate} </span>
      </div>
    )
  }

  handleDelete = async (id) => {
    await axios.delete(`/api/category/byId/${id}`, { headers: { 'authorization': localStorage.getItem('token') } })
    window.location.reload(false)
  }
  
  renderCategories = () => {
    if (!this.props.currentTrip || this.props.currentTrip.categories.length === 0) {
      return <div> No Categories Yet </div>
    } else {
      return this.props.currentTrip.categories.map(({_id, title}) => {
        return (
          <div key={_id}>
            <Link to={{ pathname: `/currentCategory/${_id}` }}>
              <div className="categoryBtn">{title}</div>
            </Link>
            <button
              className="deleteBtn"
              type="submit"
              onClick={() => this.handleDelete(_id)}>
              Delete
            </button>
          </div>
        )
      })
    }
  }

  onSubmit = async (formValues, dispatch) => {
    const { _id } = this.props.currentTrip;
    try {
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
        <label>
          {field.label}
        </label>
        <br></br>
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
    console.log(this.props.currentTrip)
    const { handleSubmit } = this.props;
    return (
      <div>

        <Back />
        <Refresh />

        <div className="tripHeader">Current Trip</div>

        <div className="card">
          <div>{this.renderTrip()}</div>
          {this.renderCategories()}
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


    )
  }
};

function mapStateToProps(state) {
  return { currentTrip: state.trips.currentTrip }
}

export default compose(
  reduxForm({ form: 'category' }),
  connect(mapStateToProps, { getTripById }),
  requireAuth
)(CurrentTrip);