import {
    GET_USER_TRIPS,
    GET_USER_TRIPS_ERROR,
    GET_TRIP_BY_ID,
    GET_TRIP_BY_ID_ERROR,
} from '../actions/types'

const INITIAL_STATE = {
    userTrips: '',
    getUserTripsError: '',
    currentTrip: {
      categories: [],
      endDate: "",
      startDate: "",
      title: "",
      users: [],
      _id: '',
    },
    getTripByIdError: '',
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_USER_TRIPS:
        return {...state, userTrips: action.payload, authError: '' };
      case GET_USER_TRIPS_ERROR:
        return {...state, getUserTripsError: action.payload };
      case GET_TRIP_BY_ID:
        return {...state, currentTrip: action.payload, authError: '' };
      case GET_TRIP_BY_ID_ERROR:
        return {...state, getTripByIdError: action.payload };
      default:
        return state;
    }
  }
  
  
