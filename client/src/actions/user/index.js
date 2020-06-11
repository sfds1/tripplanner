import axios from 'axios'

import { GET_USER_INFO, GET_USER_INFO_ERROR} from '../types';

export const getUserInfo = () => async dispatch  => {
    try {
        const { data } = axios.get('/api/user')
        dispatch({ type: GET_USER_INFO, payload: data })
    } catch (e) {
        dispatch({ type: GET_USER_INFO_ERROR, payload: e })
    }
};