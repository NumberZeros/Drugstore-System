import {Alert} from 'react-native';

import firebasesApp from '../component/firebaseConfig';

export const login = data => {
  const {email, passWord} = data;
  firebasesApp
    .auth()
    .signInWithEmailAndPassword(email, passWord)
    .then(() => {
      const user = firebasesApp.auth().currentUser;
      // console.log(user);
      Alert.alert(
        'Đăng nhập thành công ' + `${email}`,
        'Cám ơn quí kháckh',
        [
          {
            text: 'OK',
            // onPress: () => {
            //   return user;
            // },
          },
        ],
        {cancelable: false},
      );
      return user;
    })
    .catch(function(error) {
      Alert.alert('Vui lòng kiểm tra lại email hoặc password');
      return error;
    });
};

export const RegisterAccount = () => {
  const {email, passWord} = this.state.value;
  console.log(email, passWord);
  firebasesApp
    .auth()
    .createUserWithEmailAndPassword(email, passWord)
    .then(() =>
      Alert.alert(
        `Tạo ${email} thành công `,
        'Cám ơn quí kháckh',
        [
          {
            text: 'Cancel',
            onPress: () =>
              this.setState({
                value: {
                  email: '',
                  passWord: '',
                },
              }),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => this.props.navigation.goBack(),
          },
        ],
        {cancelable: false},
      ),
    )
    .catch(function(error) {
      Alert.alert('Vui lòng kiểm tra lại kết nối trước khi đăng kí');
    });
};
