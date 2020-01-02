/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Input, Card} from 'react-native-elements';
import Button from 'react-native-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as firebase from 'firebase';
import 'firebase/firestore';
import firebasesApp from '../firebaseConfig';

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

  login = () => {
    const {email, passWord} = this.state.data;
    console.log(this.state.data);
    const that = this;
    let db = firebasesApp
      .auth()
      .signInWithEmailAndPassword(email, passWord)
      .then(() => {
        const user = firebasesApp.auth().currentUser;
        db = firebase
          .firestore()
          .collection('User')
          .doc(user.uid)
          .get()
          .then(function(doc) {
            if (doc.data().isStore === false) {
              that.props.actions.login({
                username: doc.data().username,
                birthday: doc.data().birthday,
                id: user.uid,
                email: user.email,
                isStore: false,
                namestore: '',
                address: '',
                phone: '',
              });
            } else {
              that.props.actions.login({
                username: doc.data().username,
                birthday: doc.data().birthday,
                id: user.uid,
                email: user.email,
                isStore: doc.data().isStore,
                namestore: doc.data().DrugMode.namestore,
                address: doc.data().DrugMode.address,
                phone: doc.data().DrugMode.phone,
              });
            }
          })
          .catch(err => {
            console.log('loi khong lay dc doccument', err);
          });
      })
      .catch(function(error) {
        Alert.alert('Vui lòng kiểm tra lại email hoặc password');
        return error;
      });
  };
  render() {
    const {data} = this.state;
    return (
      <View>
        <Card>
          <Input
            keyboardType="email-address"
            placeholder="Email"
            style={{marginBottom: '20'}}
            leftIcon={{
              type: 'MaterialCommunityIcons',
              name: 'email',
            }}
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
          <Input
            secureTextEntry={true}
            placeholder="PassWord"
            data={data.passWord}
            leftIcon={{type: 'font-awesome', name: 'lock'}}
            onChangeText={text =>
              this.setState({
                data: {
                  email: data.email,
                  passWord: text,
                },
              })
            }
          />
        </Card>
        <View style={styles.formatBtn}>
          <Button
            style={styles.btn}
            onPress={() => [
              this.login(),
              // this.props.actions.login(data),
              this.props.actions.checkLogin(),
            ]}>
            {' '}
            Login{' '}
          </Button>
          <Button
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Register')}>
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
    // borderWidth: 3,
    opacity: 0.5,
    width: wp('80%'),
    // color: '#474b4f',
    // borderRadius: 10,
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
