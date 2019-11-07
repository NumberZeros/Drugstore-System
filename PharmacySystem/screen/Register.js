import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Button from 'react-native-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import firebasesApp from '../component/firebaseConfig';

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
        email: '',
        passWord: '',
      },
    };
  }

  changePass = text => {
    const {email, passWord} = this.state.value;
    this.setState({
      value: {
        email,
        passWord: text,
      },
    });
  };

  changeEmail = text => {
    const {email, passWord} = this.state.value;
    this.setState({
      value: {
        email: text,
        passWord,
      },
    });
  };

  RegisterAccount = () => {
    const {email, passWord} = this.state.value;
    console.log(email, passWord);
    firebasesApp
      .auth()
      .createUserWithEmailAndPassword(email, passWord)
      .then(() =>
        Alert.alert(
          'Đăng nhập thành công' + `${email}`,
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
              onPress: () => this.props.navigation.navigate('Login'),
            },
          ],
          {cancelable: false},
        ),
      )
      .catch(function(error) {
        Alert.alert('Vui lòng kiểm tra lại kết nối trước khi đăng kí');
      });
  };
  test = () => {
    console.log(this.state.value.email, this.state.value.passWord);
  };
  render() {
    const {value} = this.state;
    return (
      <View style={styles.Register}>
        <TouchableOpacity style={styles.headIcon}>
          <Icon name="user" color="#86C232" size={wp('30%')} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={this.changeEmail}
          value={value.email}
        />
        {value.email !== '' && (
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="PassWord"
            onChangeText={this.changePass}
            value={value.passWord}
          />
        )}
        <View style={styles.formatBtn}>
          <Button style={styles.btn} onPress={this.RegisterAccount}>
            Register
          </Button>
          <Button style={styles.btn} onPress={this.test}>
            test
          </Button>
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
  headIcon: {
    marginTop: hp('5%'),
  },
});
