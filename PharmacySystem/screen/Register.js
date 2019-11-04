import React, {Component} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Button from 'react-native-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Register extends Component {
  static navigationOptions = {
    title: 'Register',
    alignItems: 'center',
    headerStyle: {
      backgroundColor: '#474B4F',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft: wp('25%'),
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      value: {
        user: '',
        passWord: '',
      },
    };
  }
  render() {
    const {value} = this.state;
    return (
      <View style={styles.Register}>
        <TouchableOpacity style={styles.headIcon}>
          <Icon name="user" color="#86C232" size={wp('30%')} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email"
          value={value.user}
          //   autoFocus={true}
        />
        <TextInput
          style={styles.input}
          keyboardType="visible-password"
          placeholder="PassWord"
          value={value.passWord}
        />
        <View style={styles.formatBtn}>
          <Button style={styles.btn}> Register </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Register: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: hp('30%'),
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
  headIcon: {
    marginTop: hp('5%'),
    // width: wp('40%'),
    // height: hp('20%'),
  },
});
