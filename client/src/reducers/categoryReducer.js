import {
    GET_CATEGORY_BY_ID,
    GET_CATEGORY_BY_ID_ERROR,
} from '../actions/types'

const INITIAL_STATE = {
    currentCategory: {
      title: "",
      activities: [],
      _id: '',
    },
    getCategoryByIdError: '',
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_CATEGORY_BY_ID:
        return {...state, currentCategory: action.payload, authError: '' };
      case GET_CATEGORY_BY_ID_ERROR:
        return {...state, getCategoryByIdError: action.payload };
      default:
        return state;
    }
  }
  
  
