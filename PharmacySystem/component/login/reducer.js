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
      let db = firebasesApp
        .auth()
        .signInWithEmailAndPassword(email, passWord)
        .then()
        .catch(function(error) {
          Alert.alert('Vui lòng kiểm tra lại email hoặc password');
          return error;
        });
      const user = firebasesApp.auth().currentUser;
      // console.log('user',JSON.stringify(user));
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
            if (doc.data().isStore === true) {
              state.data.isStore = doc.data().isStore;
              state.data.namestore = doc.data().DrugMode.namestore;
              state.data.address = doc.data().DrugMode.address;
              state.data.phone = doc.data().DrugMode.phone;
            }
            console.log('Document data:', state);
          })
          .catch(err => {
            console.log('loi khong lay dc doccument', err);
          });

        return {
          ...state,
          data: state.data,
          isCheck: !state.isCheck,
        };
      }
      return state;
    }
    case actionType.LOGOUT: {
      return {
        ...state,
        data: null,
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
      // console.log(action.data);
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
              phone: action.data.phone,
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
              console.log('doc', doc.data());
              state.data.namestore = doc.data().DrugMode.namestore;
              state.data.address = doc.data().DrugMode.address;
              state.data.phone = doc.data().DrugMode.phone;
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
