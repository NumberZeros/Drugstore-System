import * as firebase from 'react-native-firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDCGAcH5sPsoJIH8NNQiN6RhvVw3dyDzxA',
  authDomain: 'testfirebase-dbd0c.firebaseapp.com',
  databaseURL: 'https://testfirebase-dbd0c.firebaseio.com',
  projectId: 'testfirebase-dbd0c',
  storageBucket: 'testfirebase-dbd0c.appspot.com',
  messagingSenderId: '1083535192825',
  appId: '1:1083535192825:web:1e03f5146a93ce9cd76828',
  measurementId: 'G-HTL9SXQL7J',
};
firebase.analytics();
// Initialize Firebase
export const firebasesApp = firebase.initializeApp(firebaseConfig);
