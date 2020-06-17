import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Refresh from '../../components/Refresh';
import Back from '../../components/Back';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth'
import { getUserTrips } from './../../actions/trips'

class Trips extends Component {
  componentDidMount = async () => {
    await this.props.getUserTrips();
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