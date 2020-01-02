import {Alert} from 'react-native';
import * as actionType from './constant';
import * as actions from './actions';

import firebasesApp from '../../component/firebaseConfig';
import * as firebase from 'firebase';
import 'firebase/firestore';

let initialState = {
  isEdit: false,
  data: [],
  items: {},
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
        .catch(function(error) {
          console.error('Error adding document: ', error);
        });
      return {
        ...state,
      };
    }
    case actionType.DELETE: {
      console.log(JSON.stringify(action));
      let db = firebase
        .firestore()
        .collection('Product')
        .doc(action.id)
        .delete()
        .then(Alert.alert('Delete Success'));
      return {
        ...state,
        items: {},
      };
    }
    case actionType.UPDATEDATA: {
      return {
        ...state,
        isEdit: !state.isEdit,
        items: action.data,
      };
    }
    case actionType.INPUTCHANGE: {
      return {
        ...state,
        items: {
          ...state.items,
          [action.data.name]: action.data.value.e,
        },
      };
    }
    default:
      return state;
  }
}
