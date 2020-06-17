import React, { Component } from "react";
import Refresh from '../../components/Refresh';
import Back from '../../components/Back';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from '../../hoc/requireAuth'
import { getTripById } from './../../actions/trips'

class CurrentTrip extends Component {

  componentDidMount = async () => {
    await this.props.getTripById(this.props.match.params.id);
  }

  renderTrip = () => {
    const { _id, title, startDate, endDate } = this.props.currentTrip;
    return (
      <div key={_id}>
        <span className="tripMainTab"> {title} </span>
        <br></br>
        <span className="tripInfoTab"> Start: {startDate} </span>
        <br></br>
        <span className="tripInfoTab"> End: {endDate} </span>
      </div>
    )
  }

  render() {
    console.log(this.props.currentTrip)
    return (
      <div>

        <Back />
        <Refresh />

        <div className="tripHeader">Main Trip Tab</div>

        <div className="card">
          <div>{this.renderTrip()}</div>
        </div>

      </div>

    )
  }
};

function mapStateToProps(state) {
  return { currentTrip: state.trips.currentTrip }
}

export default compose(
  requireAuth,
  connect(mapStateToProps, { getTripById })
)(CurrentTrip);