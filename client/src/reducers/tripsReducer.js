// This is to get user data for the trips page
import {
  GET_USER_TRIPS, 
  GET_USER_TRIPS_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  title: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
      case GET_USER_TRIPS:
          return { ...state, userData: action.payload };
      case GET_USER_TRIPS_ERROR:
          return { ...state, getUserInfoError: action.payload };
      default:
          return state;
  }
}