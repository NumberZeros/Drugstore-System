import {Alert} from 'react-native';
import * as actionType from './constant';

import firebasesApp from '../../component/firebaseConfig';
import * as firebase from 'firebase';
import 'firebase/firestore';

let initialState = {
  isCheck: false,
  data: [],
};

export default function handleAction(state = initialState, action) {
  switch (action.type) {
    case actionType.ADDDRUG: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}