import * as actionType from './actions';
import * as APIS from '../../api/login';

let initialState = {
  isCheck: false,
  data: {},
};

export const name = 'login';

const handleAction = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionType.login: {
      console.log(`reducer: ${action}`);
      const {...datas} = action.payload;
      const res = APIS.login(datas);
      return {
        data: {res},
        isCheck: true,
      };
    }
    case actionType.checkLogin: {
      return state;
    }
    default:
      return state;
  }
};

export default handleAction;
