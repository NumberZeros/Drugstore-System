/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input, Card} from 'react-native-elements';
import Button from 'react-native-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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

  create = () => {
    const status = true;
    this.props.createAccount(status);
  };
  test = () => {
    if (this.props.Login.data !== null) {
      console.log(
        'props',
        JSON.stringify(this.props.Login) + '\n state',
        JSON.stringify(this.state),
      );
    }
  };
  render() {
    const {data} = this.state;
    const {...actions} = this.props;
    // console.log('haha', JSON.stringify(this.props));
    return (
      <View
      // style={styles.login}
      >
        <Card>
          <Input
            // style={styles.input}
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
            style={styles.input}
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
              this.props.actions.login(data),
              this.props.actions.checkLogin(),
            ]}>
            {' '}
            Login{' '}
          </Button>
          <Button style={styles.btn} onPress={this.create}>
            Register
          </Button>
          <Button style={styles.btn} onPress={this.test}>
            test
          </Button>
        </View>
      </View>
      // <View>
      //   <Input placeholder="BASIC INPUT" />

      //   <Input
      //     placeholder="INPUT WITH ICON"
      //     leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
      //   />

      //   <Input
      //     placeholder="INPUT WITH CUSTOM ICON"
      //     leftIcon={<Icon name="user" size={24} color="black" />}
      //   />
      // </View>
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
