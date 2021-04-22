import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import comment from './comment';

export default combineReducers({
  alert,
  auth,
  profile,
  comment
});
