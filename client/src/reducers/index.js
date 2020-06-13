import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from './userReducer';
// Boilerplate imports
import authReducer from './authReducer';
import { ADD_TODO } from '../actions/types';
import tripsReducer from './tripsReducer';


export default combineReducers({
  user: userReducer,
  trips: tripsReducer,
  auth: authReducer,
  form: formReducer.plugin({
    'addTodo': (state, action) => {
      switch(action.type) {
        case ADD_TODO:
          return undefined;
        default:
          return state;
      }
    }
  })
});
