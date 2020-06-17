
import axios from 'axios';

import {
    GET_USER_TRIPS,
    GET_USER_TRIPS_ERROR,
    GET_TRIP_BY_ID,
    GET_TRIP_BY_ID_ERROR,
    GET_CATEGORY,
    GET_CATEGORY_ERROR,
    GET_ACTIVITY,
    GET_ACTIVITY_ERROR,
    GET_COMMENT,
    GET_COMMENT_ERROR,
} from '../types';

export const getUserTrips = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/trip', { headers: { 'authorization': localStorage.getItem('token')} })
        dispatch({ type: GET_USER_TRIPS, payload: data })
    } catch (e) {
        dispatch({ type: GET_USER_TRIPS_ERROR, payload: e })
    }
};

export const getTripById = tripId => async dispatch => {
    try {
        const { data } = await axios.get(`/api/trip/${tripId}`, { headers: { 'authorization': localStorage.getItem('token')} })
        dispatch({ type: GET_TRIP_BY_ID, payload: data })
    } catch (e) {
        dispatch({ type: GET_TRIP_BY_ID_ERROR, payload: e})
    }
};

export const getCategory = tripId => async dispatch => {
    try {
        // No category
        const { data } = await axios.get(`/api/category/${tripId}`, { headers: { 'authorization': localStorage.getItem('token')} })
        dispatch({ type: GET_CATEGORY, payload: data })
    } catch (e) {
        dispatch({ type: GET_CATEGORY_ERROR, payload: e })
    }
};

export const getActivity = categoryId => async dispatch => {
    try {
        // No activity
        const { data } = await axios.get(`/api/activity/${categoryId}`, { headers: { 'authorization': localStorage.getItem('token')} })
        dispatch({ type: GET_ACTIVITY, payload: data })
    } catch (e) {
        dispatch({ type: GET_ACTIVITY_ERROR, payload: e })
    }
};
export const getComment = commentId => async dispatch => {
    try {
        // No activity
        const { data } = await axios.get(`/api/comments/${commentId}`, { headers: { 'authorization': localStorage.getItem('token')} })
        dispatch({ type: GET_COMMENT, payload: data })
    } catch (e) {
        dispatch({ type: GET_COMMENT_ERROR, payload: e })
    }
}