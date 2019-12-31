import {Alert} from 'react-native';
import * as actionType from './constant';
import * as actions from './actions';

import firebasesApp from '../../component/firebaseConfig';
import * as firebase from 'firebase';
import 'firebase/firestore';

let initialState = {
  data: [],
};

export default function handleAction(state = initialState, action) {
  switch (action.type) {
    case actionType.ADDDRUG: {
      let db = firebase.firestore();
      db.collection('Product')
        .add({
          nameproduct: action.data.nameproduct,
          price: action.data.price,
          idStore: action.data.id,
          namestore: action.data.namestore,
          ngayhethan: action.data.ngayhethan,
          shape: action.data.shape,
          lo: action.data.lo,
        })
        .then(function(docRef) {
          state.data = [];
        })
        .catch(function(error) {
          console.error('Error adding document: ', error);
        });
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
