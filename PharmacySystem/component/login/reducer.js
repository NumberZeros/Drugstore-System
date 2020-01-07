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
      console.log('actions', action.data);
      return {
        ...state,
        data: {
          ...action.data,
        },
        isCheck: !state.isCheck,
      };
    }
    case actionType.LOGOUT: {
      return {
        ...state,
        data: null,
        isCheck: !state.isCheck,
      };
    }
    case actionType.CHECKLOGIN: {
      // console.log('checklogin', state.data);
      let user = firebasesApp.auth().currentUser;
      let newUser = true;
      let db = firebase
        .firestore()
        .collection('User')
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(doc => {
            if (doc.id === user.uid) {
              newUser = false;
              // return {
              //   ...state,
              //   // isAcount: true,
              // };
            }
          });
          if (newUser === true) {
            db = firebase
              .firestore()
              .collection('User')
              .doc(user.uid)
              .set(
                {
                  email: user.email,
                  isStore: false,
                  avatar:
                    'https://firebasestorage.googleapis.com/v0/b/testfirebase-dbd0c.appspot.com/o/user.png?alt=media&token=3a3b0b23-a790-451a-8315-eb140352af7a',
                  path: 'user.png',
                },
                {merge: true},
              )
              .catch(function(error) {
                console.error('Error writing document: ', error);
              });
          }
        })
        .catch(function(error) {
          console.log('Error getting documents: ', error);
        });
      return {
        ...state,
      };
    }
    case actionType.UPDATEINFO: {
      firebasesApp
        .storage()
        .ref(action.data.path)
        .getDownloadURL()
        .then(function(url) {
          //console.log('asd' + url);
          let db = firebase
            .firestore()
            .collection('User')
            .doc(action.data.id)
            .set(
              {
                username: action.data.username,
                birthday: action.data.birthday,
                path: action.data.path,
                avatar: url,
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
                  state.data.url = doc.data().path;
                  state.data.avatar = doc.data().avatar;
                  console.log('load document data:', state);
                })
                .catch(err => {
                  console.log('loi khong lay dc doccument', err);
                });
            })
            .catch(function(error) {
              console.error('Error writing document: ', error);
            });
        })
        .catch(function(error) {
          console.log('loi' + error.code);
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
