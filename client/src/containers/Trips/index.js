import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import UserDash from "../../components/UserDash";
import Background from "../../components/Background";
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';
import requireAuth from './../../hoc/requireAuth'
import { getUserTrips } from './../../actions/trips'
// import axios from 'axios'
// import BEARER_TOKEN from '../../yelpAPI/config'

class Trips extends Component {
  
  componentDidMount = async () => {
    await this.props.getUserTrips();
  }
  
  // componentDidMount() { 
  //   // console.log(BEARER_TOKEN);
  //   // console.log(sessionStorage.getItem("trips"), "trips")

  //   // const trips = JSON.parse(sessionStorage.getItem("trips"))
      
  //   //   axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${trips[trips.length-1].city}`, {
  //   //     headers: {
  //   //       Authorization: `${BEARER_TOKEN}`
  //   //   },
  //   //     params: {
          
  //   //     categories: 'tours, All',
  //   //   }
  //   //   })
  //   //   .then((res) => {
  //   //   console.log(res)
  //   //   })
  //   //   .catch((err) => {
  //   //   console.log ('error')
  //   //   })
  // }

  handleDelete = async (id) => {
    await axios.delete(`/api/trip/${id}`, { headers: { 'authorization': localStorage.getItem('token') } })
    window.location.reload(false)
  }
  
  renderTrips = () => {
    if (this.props.trips.length === 0) {
      return <div> No Trips Yet </div>
    } else {
      return this.props.trips.map(({ _id, title }) => {
        return (
          <div key={_id}>
          <Link to={{ pathname: `/currentTrip/${_id}` }}>
            <div className="tripBtn">{title}</div>
          </Link>
          <button
            className="deleteBtn"
            type="submit"
            onClick={() => this.handleDelete(_id)}>
            X
          </button>
          </div>
        )
      })
    }
  }
  render() {
    console.log(this.props.trips)
    return (

      <div>

        <Navbar />
        <UserDash />
        <Background />

        <div className="card">
          <div>
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