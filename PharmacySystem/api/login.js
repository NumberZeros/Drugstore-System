import {Alert} from 'react-native';

import firebasesApp from '../component/firebaseConfig';

export const login = data => {
  const {email, passWord} = data;
  firebasesApp
    .auth()
    .signInWithEmailAndPassword(email, passWord)
    .then(() => {
      const user = firebasesApp.auth().currentUser;
      Alert.alert(
        'Đăng nhập thành công ' + `${email}`,
        'Cám ơn quí kháckh',
        [
          {
            text: 'OK',
            onPress: () => {
              return user;
            },
          },
        ],
        {cancelable: false},
      );
    })
    .catch(function(error) {
      Alert.alert('Vui lòng kiểm tra lại email hoặc password');
    });
};
