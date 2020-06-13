import axios from 'axios'

import {
    GET_USER_INFO, 
    GET_USER_INFO_ERROR,
    GET_FRIEND_BY_EMAIL,
    GET_FRIEND_BY_EMAIL_ERROR,
} from '../types';

export const getUserInfo = () => async dispatch  => {
    try {
        const data = axios.get(`/api/user`, { headers: { 'authorization': localStorage.getItem('token')} })
        dispatch({ type: GET_USER_INFO, payload: data })
    } catch (e) {
        dispatch({ type: GET_USER_INFO_ERROR, payload: e })
    }
};

export const getFriendByEmail = (email) => async dispatch => {
    try {
        const { data } = axios.get(`/api/user/email/?${email}`, { headers: { 'authorization': localStorage.getItem('token')} })
        dispatch({ type: GET_FRIEND_BY_EMAIL, payload: data })
    } catch (e) {
        dispatch({ type: GET_FRIEND_BY_EMAIL_ERROR, payload: e })
    }
}