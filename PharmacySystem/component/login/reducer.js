import {Alert} from 'react-native';
import * as actionType from './constant';
import * as APIS from '../../api/login';

import firebasesApp from '../firebaseConfig';

let initialState = {
  isCheck: false,
  data: {},
};

export const name = 'login';

const handleAction = (state = initialState, action) => {
  console.log(JSON.stringify(action));
  switch (action.type) {
    case actionType.LOGIN: {
      const {email, passWord} = action.data;
      firebasesApp
        .auth()
        .signInWithEmailAndPassword(email, passWord)
        .then(() => {
          Alert.alert(
            'Đăng nhập thành công ' + `${email}`,
            'Cám ơn quí kháckh',
            [
              {
                text: 'OK',
              },
            ],
            {cancelable: false},
          );
        })
        .catch(function(error) {
          Alert.alert('Vui lòng kiểm tra lại email hoặc password');
          return error;
        });
      const user = firebasesApp.auth().currentUser;
      return {
        ...state,
        data: {
          id: user.uid,
          email: user.uid,
        },
        isCheck: !state.isCheck,
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
