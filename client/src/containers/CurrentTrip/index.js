import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from '../../hoc/requireAuth'
import { getUserTrips } from './../../actions/trips'

class CurrentTrip extends Component {

  componentDidMount() {
    this.props.getUserTrips();
  }

  render() {

    return (
      <div>

        <span>Trip Title:</span>
        <span>Time of Trip:</span>
        <span>Location:</span>

      </div>

    )
  }
};

function mapStateToProps(state) {
  return { trip: state.user.tripData }
}

export default compose(
  requireAuth,
  connect(mapStateToProps, { getUserTrips })
)(CurrentTrip);