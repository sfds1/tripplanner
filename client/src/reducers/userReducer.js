// This is to get user data for the profile page
import {
    GET_USER_INFO, 
    GET_USER_INFO_ERROR,
    GET_FRIEND_BY_EMAIL,
    GET_FRIEND_BY_EMAIL_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    userData: {},
    friendData: {},
    getUserInfoError: '',
    getFriendByEmailError: '',
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER_INFO:
            return { ...state, userData: action.payload };
        case GET_USER_INFO_ERROR:
            return { ...state, getUserInfoError: action.payload };
        case GET_FRIEND_BY_EMAIL:
            return { ...state, friendData: action.payload };
        case GET_FRIEND_BY_EMAIL_ERROR:
            return { ...state, getFriendByEmailError: action.payload };
        default:
            return state;
    }
}