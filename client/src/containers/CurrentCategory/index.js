import React, { Component } from "react";
import Navbar from "../../components/Navbar";

import { Field, reduxForm } from 'redux-form';
import axios from 'axios';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from '../../hoc/requireAuth'
import { getCategoryById } from '../../actions/categories'


class CurrentCategory extends Component {
  componentDidMount = async () => {
    await this.props.getCategoryById(this.props.match.params.id);
  }

  renderCategory = () => {
    const title = this.props?.currentCategory?.title;
    return (
      <div>
        <span className="tripMainTab"> {title} </span>
      </div>
    )
  }

  renderActivities = () => {
    if (!this.props.currentCategory || this.props.currentCategory.activities.length === 0) {
      return <div> No Activities Yet </div>
    } else {
      return this.props.currentCategory.activities.map(({ _id, title }) => {
        return (
          <div key={_id}>
            <div className="categoryBtn">{title}</div>
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

  onSubmit = async (formValues) => {
    const { _id } = this.props.currentCategory;
    const { data } = await axios.post(`/api/activity/${_id}`, formValues, { headers: { 'authorization': localStorage.getItem('token') } });
    console.log(data);
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

  handleDelete = async (id) => {
    await axios.delete(`/api/activity/byId/${id}`, { headers: { 'authorization': localStorage.getItem('token') } })
    window.location.reload(false)
  }

  render() {
    console.log(this.props.currentCategory)
    const { handleSubmit } = this.props;
    return (
      <div>

        <Navbar />

        <div className="tripHeader">Current Category</div>

        <div className="card">
          <div>{this.renderCategory()}</div>
          {this.renderActivities()}

          <div className="formBox">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div>
                <Field
                  placeholder="Activity Name"
                  name='title'
                  label="Name of the Activity"
                  component={this.renderInput}
                />
                <Field
                  placeholder="Activity Details"
                  name='details'
                  label="Details"
                  component={this.renderInput}
                />
                <Field
                  placeholder="Date"
                  name='date'
                  label="Date"
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
}

function mapStateToProps(state) {
  return { currentCategory: state.category.currentCategory }
}

export default compose(
  reduxForm({ form: 'activity' }),
  connect(mapStateToProps, { getCategoryById }),
  requireAuth
)(CurrentCategory);