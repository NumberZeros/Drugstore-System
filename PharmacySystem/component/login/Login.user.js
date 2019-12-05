/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import {connect} from 'react-redux';

import Button from 'react-native-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {name} from './reducer';
import * as actions from './actions';
// import firebasesApp from '../firebaseConfig';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        email: '',
        passWord: '',
      },
    };
  }
  // login = () => {
  //   const {email, passWord} = this.state.value;
  //   firebasesApp
  //     .auth()
  //     .signInWithEmailAndPassword(email, passWord)
  //     .then(() => {
  //       const user = firebasesApp.auth().currentUser;
  //       Alert.alert(
  //         'Đăng nhập thành công ' + `${email}`,
  //         'Cám ơn quí kháckh',
  //         [
  //           {
  //             text: 'OK',
  //             onPress: () => {
  //               this.props.parentLogin(user);
  //             },
  //           },
  //         ],
  //         {cancelable: false},
  //       );
  //     })
  //     .catch(function(error) {
  //       Alert.alert('Vui lòng kiểm tra lại email hoặc password');
  //     });
  // };

  // componentDidMount(){
  //   this.props.actions.checkLogin();
  // }

  create = () => {
    const status = true;
    this.props.createAccount(status);
  };
  render() {
    const {value} = this.state;
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
          <Button style={styles.btn} onPress={this.create}>
            Register
          </Button>
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
