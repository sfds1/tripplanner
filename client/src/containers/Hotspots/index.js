import React, { Component } from "react";
import Navbar from '../../components/Navbar';
import UserDash from "../../components/UserDash";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, Button } from 'semantic-ui-react';
import requireAuth from './../../hoc/requireAuth'
import { getUserInfo } from './../../actions/user'
import Background from "../../components/Background";
// import getApi from '../../yelpApi/getAPI';

class Hotspots extends Component {

  state = {
    businesses: []
  }

  componentDidMount() {
    this.props.getUserInfo();

  }



  render() {
    console.log('userdata:', this.props.user)
    return (

      <div>

        <Navbar />
        <UserDash />
        <Background />

        <div className="card">
          <div className="cardTitle">
            Search Hotspots
          </div>


          <div className="formBox">
            <label htmlFor="search"></label>
            <input type="text" placeholder="City Name"></input>

            <Button
              className="searchBtn"
              type='submit'
              onClick={this.findFriend}>
              Search
              </Button>

          </div>

        </div>

      </div>

    )
  }
}


function mapStateToProps(state) {
  return { user: state.user.userData }
}

export default compose(
  requireAuth,
  connect(mapStateToProps, { getUserInfo })
)(Hotspots);