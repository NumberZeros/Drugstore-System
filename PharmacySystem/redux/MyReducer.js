import {combineReducers} from 'redux';

import Login from '../component/login/reducer';

const MyReducer = combineReducers({
  Login,
});

export default MyReducer;