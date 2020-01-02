import {Alert} from 'react-native';
import * as actionType from './constant';

import firebasesApp from '../../component/firebaseConfig';
import * as firebase from 'firebase';
import 'firebase/firestore';

let initialState = {
  isCheck: false,
  data: [],
  isAcount: false,
  loadAPi: false,
};

export default function handleAction(state = initialState, action) {
  switch (action.type) {
    case actionType.LOADDATA: {
      return {
        loadAPi: true,
        ...state,
      };
    }
    default:
      return state;
  }
}
