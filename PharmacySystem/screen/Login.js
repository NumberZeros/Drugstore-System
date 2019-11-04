import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

import Button from 'react-native-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
        user: '',
        passWord: '',
      },
      creactaccount: false,
    };
  }
  render() {
    const {value, creactaccount} = this.state;
    return (
      <View style={styles.login}>
        <TextInput
          style={styles.input}
          placeholder="User"
          value={value.user}
          // autoFocus={true}
        />
        <TextInput
          style={styles.input}
          placeholder="PassWord"
          value={value.passWord}
        />
        <View style={styles.formatBtn}>
          <Button style={styles.btn}> Login </Button>
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
    color: '#FFFFFF',
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
