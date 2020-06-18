import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Refresh from '../../components/Refresh';
import Back from '../../components/Back';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth'
import { getUserTrips } from './../../actions/trips'
import axios from 'axios'
import BEARER_TOKEN from '../../yelpAPI/config'

class Trips extends Component {
  
  componentDidMount() { 
    console.log(BEARER_TOKEN);
    console.log(sessionStorage.getItem("trips"), "trips")

    const trips = JSON.parse(sessionStorage.getItem("trips"))
    

      
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${trips[trips.length-1].city}`, {
        headers: {
          Authorization: `${BEARER_TOKEN}`
      },
        params: {
          
        categories: 'tours, All',
      }
      })
      .then((res) => {
      console.log(res)
      })
      .catch((err) => {
      console.log ('error')
      })
     
  
   
  
  
  }
  
  renderTrips = () => {
    if (this.props.trips.length === 0) {
      return <div> No Trips Yet </div>
    } else {
      return this.props.trips.map(({ _id, title }) => {
        return (
          <Link to={{ pathname: `/currentTrip/${_id}` }} >
            <div className="tripBtn" key={_id}>{title}</div>
          </Link>
        )
      })
    }
  }
  render() {
    console.log(this.props.trips)
    return (

      <div>

        <Back />
        <Refresh />

        <div className="tripHeader">Trips</div>

        <div className="card">
          <div className="tripList">
            {this.renderTrips()}
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
  connect(mapStateToProps, { getUserTrips })
)(Trips);