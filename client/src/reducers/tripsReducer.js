import {
    GET_USER_TRIPS,
    GET_USER_TRIPS_ERROR,
} from '../actions/types'

const INITIAL_STATE = {
    userTrips: '',
    getUserTripsError: '',
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_USER_TRIPS:
        return {...state, userTrips: action.payload, authError: '' };
      case GET_USER_TRIPS_ERROR:
        return {...state, getUserTripsError: action.payload };
      default:
        return state;
    }
  }
  
  