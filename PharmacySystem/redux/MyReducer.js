import {combineReducers} from 'redux';
import Login, {name as nameOfLogin} from '../component/login/reducer';

const MyReducer = combineReducers({
  Login,
});

export default MyReducer;
