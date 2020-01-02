import {combineReducers} from 'redux';

import Login from '../component/login/reducer';
import Home from '../component/home/reducer';
import ManagerDrug from '../component/ManagerDrug/reducer';

const MyReducer = combineReducers({
  Home,
  Login,
  ManagerDrug,
});

export default MyReducer;
