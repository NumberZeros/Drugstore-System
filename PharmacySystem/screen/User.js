import React from 'react';
import {View, StyleSheet} from 'react-native';

import Button from 'react-native-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      idAcount: '',
      gmail: '',
    };
  }
  render() {
    const {login, idAcount, gmail} = this.state;
    return (
      <View style={styles.user}>
        {login === false ? (
          <Button
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Login')}>
            Login
          </Button>
        ) : (
          <View>
            <View style={styles.locatedBtn}>
              <Button
                style={[styles.btn, styles.logout]}
                onPress={() => this.props.navigation.navigate('ManagerUser')}>
                LogOut
              </Button>
            </View>
            <Button
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('ManagerUser')}>
              Manager User
            </Button>
            <Button
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('ManagerUser')}>
              My WishList
            </Button>
            <Button
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('ManagerUser')}>
              DrugStore Mode
            </Button>
            <Button
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('ManagerUser')}>
              Change Password
            </Button>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  user: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222629',
  },
  btn: {
    fontSize: 30,
    width: wp('80'),
    backgroundColor: '#86C232',
    borderRadius: 30,
    color: '#FFFFFF',
    padding: wp('5%'),
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginVertical: wp('3%'),
  },
  locatedBtn: {
    width: wp('90%'),
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: hp('-10%'),
  },
  logout: {
    fontSize: 20,
    width: wp('27%'),
  },
});
