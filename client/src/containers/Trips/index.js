import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth'
import { getUserTrips } from './../../actions/trips'

class Trips extends Component {
  componentDidMount = () => {
    this.props.getUserTrips();
    console.log(this.props.trips)
  }

  render() {
    return (

      <div>

        Trips Page

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