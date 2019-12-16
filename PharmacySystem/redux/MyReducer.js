import {combineReducers} from 'redux';

import Login from '../component/login/reducer';
import Home from '../screen/home/reducer';

const MyReducer = combineReducers({
  Home,
  Login,
});

export default MyReducer;