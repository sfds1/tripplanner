import axios from 'axios';

import {
    GET_USER_TRIPS,
    GET_USER_TRIPS_ERROR,
} from '../types';

export const getUserTrips = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/trips', { headers: { 'authorization': localStorage.getItem('token')} })
        dispatch({ type: GET_USER_TRIPS, payload: data })
    } catch (e) {
        dispatch({ type: GET_USER_TRIPS_ERROR, payload: e })
    }
}