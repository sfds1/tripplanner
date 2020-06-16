import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from '../../hoc/requireAuth'
import { getUserTrips } from './../../actions/trips'

class CurrentTrip extends Component {

  componentDidMount = async () => {
    await this.props.getUserTrips();
  }

  renderTrips = () => {
    if (this.props.trips.length === 0) {
      return <div> No Trips Yet </div>
    } else {
      return this.props.trips.map(({ _id, title, startDate, endDate }) => {
        return (
          <div key={_id}>
            <span> Trip Title:{title} </span>
            <br></br>
            <span> Start: {startDate} </span>
            <br></br>
            <span> End: {endDate} </span>
          </div>
        )
      })
    }
  }

  render() {
    console.log(this.props.trips)
    return (
      <div>

        <span>{this.renderTrips()}</span>

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
)(CurrentTrip);