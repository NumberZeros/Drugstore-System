import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet, Alert} from 'react-native';

import Button from 'react-native-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import firebasesApp from '../component/firebaseConfig';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    alignItems: 'center',
    headerStyle: {
      backgroundColor: '#474B4F',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft: wp('30%'),
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      value: {
        email: '',
        passWord: '',
      },
      creactaccount: false,
    };
  }
  login = () => {
    const {email, passWord} = this.state.value;
    firebasesApp
      .auth()
      .signInWithEmailAndPassword(email, passWord)
      .then(() =>
        Alert.alert(
          'Đăng nhập thành công ' + `${email}`,
          'Cám ơn quí kháckh',
          [
            {
              text: 'OK',
              onPress: () => this.props.navigation.navigate('Home'),
            },
          ],
          {cancelable: false},
        ),
      )
      .catch(function(error) {
        Alert.alert('Vui lòng kiểm tra lại kết nối trước khi đăng nhập');
      });
  };

  render() {
    const {value, creactaccount} = this.state;
    return (
      <View style={styles.login}>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email"
          value={value.email}
          //   autoFocus={true}
          onChangeText={text =>
            this.setState({
              value: {
                email: text,
                password: value.passWord,
              },
            })
          }
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="PassWord"
          value={value.passWord}
          onChangeText={text =>
            this.setState({
              value: {
                email: value.email,
                passWord: text,
              },
            })
          }
        />
        <View style={styles.formatBtn}>
          <Button style={styles.btn} onPress={this.login}>
            {' '}
            Login{' '}
          </Button>
          <Button
            style={styles.btn}
            onPress={() => this.setState({creactaccount: true})}>
            Register
          </Button>
          {creactaccount === true && this.props.navigation.navigate('Register')}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('30%'),
  },
  formatBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: wp('5%'),
    borderWidth: 3,
    opacity: 0.5,
    width: wp('80%'),
    color: '#474b4f',
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: '#6B6E70',
    marginVertical: wp('3%'),
  },
  btn: {
    margin: 10,
    backgroundColor: '#86C232',
    borderRadius: 30,
    color: '#FFFFFF',
    padding: 10,
    width: wp('35%'),
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
