import axios from 'axios';

import {
    GET_CATEGORY,
    GET_CATEGORY_ERROR,
    GET_CATEGORY_BY_ID,
    GET_CATEGORY_BY_ID_ERROR,
} from '../types';

export const getCategory = tripId => async dispatch => {
    try {
        // No category
        const { data } = await axios.get(`/api/category/all/${tripId}`, { headers: { 'authorization': localStorage.getItem('token')} })
        dispatch({ type: GET_CATEGORY, payload: data })
    } catch (e) {
        dispatch({ type: GET_CATEGORY_ERROR, payload: e })
    }
};

export const getCategoryById = categoryId => async dispatch => {
    try {
        const { data } = await axios.get(`/api/category/byId/${categoryId}`, { headers: { 'authorization': localStorage.getItem('token')} })
        dispatch({ type: GET_CATEGORY_BY_ID, payload: data })
    } catch (e) {
        dispatch({ type: GET_CATEGORY_BY_ID_ERROR, payload: e})
    }
};
