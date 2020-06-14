
import axios from 'axios';

import {
    GET_USER_TRIPS,
    GET_USER_TRIPS_ERROR,
} from '../types';

export const getUserTrips = () => async dispatch => {



    try {
        // No current trips
        const { data } = await axios.get('/api/trip', { headers: { 'authorization': localStorage.getItem('token')} })
        console.log(data)
        dispatch({ type: GET_USER_TRIPS, payload: data })
    } catch (e) {
        dispatch({ type: GET_USER_TRIPS_ERROR, payload: e })
    }
}