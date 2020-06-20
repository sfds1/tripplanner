import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import UserDash from "../../components/UserDash";
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';
import requireAuth from '../../hoc/requireAuth'
import { getCategoryById } from '../../actions/categories'
import Background from "../../components/Background";


class CurrentCategory extends Component {
  componentDidMount = async () => {
    await this.props.getCategoryById(this.props.match.params.id);
  }

  renderCategory = () => {
    const title = this.props?.currentCategory?.title;
    return (
      <div>
        <div className="activitiesMainTab"> {title} </div>
      </div>
    )
  }

  renderActivities = () => {
    if (!this.props.currentCategory || this.props.currentCategory.activities.length === 0) {
      return <div className="displayFriends"> No Activities Yet </div>
    } else {
      return this.props.currentCategory.activities.map(({ _id, title, details, date }) => {
        return (
          <div key={_id}>
            <div className="activitiesInfoTab">
              <div className="activityInfo"> {title}: {date} </div>
              <div className="activityDetails">
                {details}
              </div>
            </div>
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
      <div className="flex">

        <Navbar />
        <UserDash />
        <Background />

        <div className="card">

          <div className="cardTitle">
            Activities
          </div>

          <div>{this.renderCategory()}</div>
          {this.renderActivities()}
        </div>

        <div className="card">

          <div className="cardTitle">
            Create Activity
          </div>

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