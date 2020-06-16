import React, { Component } from "react";
import Refresh from '../../components/Refresh';
import Back from '../../components/Back';

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
            <span className="tripMainTab"> {title} </span>
            <br></br>
            <span className="tripInfoTab"> Start: {startDate} </span>
            <br></br>
            <span className="tripInfoTab"> End: {endDate} </span>
          </div>
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

        <div className="tripHeader">Main Trip Tab</div>

        <div className="card">
          <div>{this.renderTrips()}</div>
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
)(CurrentTrip);