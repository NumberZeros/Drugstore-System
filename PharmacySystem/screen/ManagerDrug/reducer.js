import {Alert} from 'react-native';
import * as actionType from './constant';
import * as actions from './actions';

import firebasesApp from '../../component/firebaseConfig';
import * as firebase from 'firebase';
import 'firebase/firestore';

let initialState = {
  isEdit: false,
  data: [],
  item: {}
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
    case actionType.DELETE: {
      console.log(JSON.stringify(action));
      let db = firebase
        .firestore()
        .collection('Product')
        .doc(action.id)
        .delete()
        .then(Alert.alert('Delete Success'));
    }
    case actionType.UPDATEDATA: {
      console.log('data', JSON.stringify(action));
      // db = firebase
      //           .firestore()
      //           .collection('User')
      //           .doc(user.uid)
      //           .set(
      //             {
      //               email: user.email,
      //             },
      //             {merge: true},
      //           )
      //           .then(function() {
      //             //console.log('Document successfully written!');
      //           })
      //           .catch(function(error) {
      //             console.error('Error writing document: ', error);
      //           });
      //       }
      //     });
      //   })
      //   .catch(function(error) {
      //     console.log('Error getting documents: ', error);
      //   });
      return{
        ...state,
        isEdit: !state.isEdit,
        item: action.data, 
      };
      return
    }
    default:
      return state;
  }
}
