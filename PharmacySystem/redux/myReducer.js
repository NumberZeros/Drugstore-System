import {combineReducers} from 'redux';
import Login, {name as nameOfLogin} from '../component/login/reducer';

const reducers = {
  [nameOfLogin]: Login,
};

const MyReducer = combineReducers({
  ...reducers,
});
export default MyReducer;
