import React, { Component } from "react";
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
      return this.props.trips.map(({ _id, title}) => {
        return (
          <button key={_id}>{title}</button>
        )
      })
    }
 }  
  render() {
    console.log(this.props.trips)
    return (

      <div>

        Trips Page
        { this.renderTrips() }

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