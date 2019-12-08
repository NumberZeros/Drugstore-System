import {Alert} from 'react-native';
import * as actionType from './constant';

import firebasesApp from '../firebaseConfig';
import * as firebase from 'firebase';
import 'firebase/firestore';

let initialState = {
  isCheck: false,
  data: {},
  isAcount: false,
};

export const name = 'login';

const handleAction = (state = initialState, action) => {
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
          email: user.email,
        },
        isCheck: !state.isCheck,
      };
    }
    case actionType.CHECKLOGIN: {
      console.log(JSON.stringify(action));
      let db = firebase
        .firestore()
        .collection('User')
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(doc => {
            //khi thực hiện thì nó sẽ trả về 2 thuộc tính id và data
            // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            if (doc.id === state.data.id) {
              return {
                ...state,
                isAcount: true,
              };
            }
          });
        })
        .catch(function(error) {
          console.log('Error getting documents: ', error);
        });
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default handleAction;
