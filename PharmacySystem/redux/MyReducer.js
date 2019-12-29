import {combineReducers} from 'redux';

import Login from '../component/login/reducer';
import Home from '../screen/home/reducer';
import ManagerDrug from '../screen/ManagerDrug/reducer';

const MyReducer = combineReducers({
  Home,
  Login,
  ManagerDrug,
});

export default MyReducer;
