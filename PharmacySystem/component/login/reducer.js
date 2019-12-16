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
      console.log(email, passWord);
      const db = firebasesApp
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
      if (user.email === email) {
        if (user.username && user.birthday) {
          return {
            ...state,
            data: {
              id: user.uid,
              email: user.email,
            },
            isCheck: !state.isCheck,
          };
        } else {
          return {
            ...state,
            data: {
              id: user.uid,
              email: user.email,
            },
            isCheck: !state.isCheck,
          };
        }
      }
      return state;
    }
    case actionType.LOGOUT: {
      return {
        ...state,
        isCheck: !state.isCheck,
      };
    }
    case actionType.CHECKLOGIN: {
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
            } else {
              db = firebase
                .firestore()
                .collection('User')
                .doc(state.data.id)
                .set(
                  {
                    email: state.data.email,
                  },
                  {merge: true},
                )
                .then(function() {
                  console.log('Document successfully written!');
                })
                .catch(function(error) {
                  console.error('Error writing document: ', error);
                });
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
    case actionType.UPDATEINFO: {
      let db = firebase
        .firestore()
        .collection('User')
        .doc(action.data.id)
        .set(
          {
            username: action.data.username,
            birthday: action.data.birthday,
          },
          {merge: true},
        )
        .then(function() {
          console.log('UPdate success!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      return state;
    }
    default:
      return state;
  }
};

export default handleAction;
