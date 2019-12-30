import {Alert} from 'react-native';
import * as actionType from './constant';

import firebasesApp from '../firebaseConfig';
import * as firebase from 'firebase';
import 'firebase/firestore';

let initialState = {
  isCheck: false,
  data: {
    // id: '',
    // email: '',
    // username: '',
    // birthday: '',
  },
  isAcount: false,
};

export const name = 'login';
const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN: {
      const {email, passWord} = action.data;
      console.log(email, passWord);
      let db = firebasesApp
        .auth()
        .signInWithEmailAndPassword(email, passWord)
        .then(() => {
          Alert.alert(
            'Đăng nhập thành công ' + `${email}`,
            'Cám ơn quí kháckh',
            [{text: 'OK'}],
            {cancelable: false},
          );
        })
        .catch(function(error) {
          Alert.alert('Vui lòng kiểm tra lại email hoặc password');
          return error;
        });
      const user = firebasesApp.auth().currentUser;
      console.log(JSON.stringify(user));
      if (user.email === email) {
        db = firebase
          .firestore()
          .collection('User')
          .doc(user.uid)
          .get()
          .then(function(doc) {
            state.data.username = doc.data().username;
            state.data.birthday = doc.data().birthday;
            state.data.id = user.uid;
            state.data.email = user.email;
            state.data.isStore = doc.data().isStore;
            state.data.namestore = doc.data().DrugMode.namestore;
            state.data.address = doc.data().DrugMode.address;
            //state.isCheck = !state.isCheck;
            // state = {
            //   ...state,
            //   isCheck: !state.isCheck,
            //   data: {
            //     username: doc.data().username,
            //     birthday: doc.data().birthday,
            //     id: user.uid,
            //     email: user.email,
            //   },
            // };
            console.log('Document data:', state);
          })
          .catch(err => {
            console.log('loi khong lay dc doccument', err);
          });

        return {
          ...state,
          data: state.data,
          //adasd: state.data.username,
          // data: {
          //   id: user.uid,
          //   email: user.email,
          //   username: state.data.username,
          //   birthday: state.data.birthday,
          // },
          isCheck: !state.isCheck,
        };
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
      let user = firebasesApp.auth().currentUser;
      let db = firebase
        .firestore()
        .collection('User')
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(doc => {
            //khi thực hiện thì nó sẽ trả về 2 thuộc tính id và data
            // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            if (doc.id === user.uid) {
              return {
                ...state,
                // isAcount: true,
              };
            } else {
              db = firebase
                .firestore()
                .collection('User')
                .doc(user.uid)
                .set(
                  {
                    email: user.email,
                  },
                  {merge: true},
                )
                .then(function() {
                  //console.log('Document successfully written!');
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
          const user = firebasesApp.auth().currentUser;
          db = firebase
            .firestore()
            .collection('User')
            .doc(user.uid)
            .get()
            .then(function(doc) {
              state.data.username = doc.data().username;
              state.data.birthday = doc.data().birthday;
              console.log('load document data:', state);
            })
            .catch(err => {
              console.log('loi khong lay dc doccument', err);
            });
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      return state;
    }
    case actionType.UPDATEDRUG: {
      let db = firebase
        .firestore()
        .collection('User')
        .doc(action.data.id)
        .set(
          {
            isStore: true,
            DrugMode: {
              address: action.data.address,
              namestore: action.data.namestore,
            },
          },
          {merge: true},
        )
        .then(function() {
          const user = firebasesApp.auth().currentUser;
          db = firebase
            .firestore()
            .collection('User')
            .doc(user.uid)
            .get()
            .then(function(doc) {
              state.data.namestore = doc.data().DrugMode.namestore;
              state.data.address = doc.data().DrugMode.address;
              state.data.isStore = doc.data().isStore;
              console.log('load document data:', state);
            })
            .catch(err => {
              console.log('loi khong lay dc doccument', err);
            });
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
