import * as actions from './actions';
import freeze from 'deep-freeze';
import {handleActions} from 'redux-actions';

const name = 'LoginUser';

const initialState = freeze({
  id: false,
  email: '',
  password: '',
});

export default handleActions(
  {
    [actions.checkLogin]: (state, action) => {
      return freeze({
        ...state,
      });
    },
  },
  initialState,
);
