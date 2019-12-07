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
// import * as actions from './actions';
// import firebasesApp from '../firebaseConfig';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        passWord: '',
      },
    };
  }

  // componentDidMount(){
  //   this.props.actions.checkLogin();
  // }

  create = () => {
    const status = true;
    this.props.createAccount(status);
  };
  render() {
    const {data} = this.state;
    const {...actions} = this.props;
    return (
      <View style={styles.login}>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email"
          data={data.email}
          // autoFocus={true}
          onChangeText={text =>
            this.setState({
              data: {
                email: text,
                password: data.passWord,
              },
            })
          }
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="PassWord"
          data={data.passWord}
          onChangeText={text =>
            this.setState({
              data: {
                email: data.email,
                passWord: text,
              },
            })
          }
        />
        <View style={styles.formatBtn}>
          <Button
            style={styles.btn}
            onPress={() => [
              this.props.actions.login(data),
              this.props.actions.checkLogin(data),
            ]}>
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
