import React from 'react';
import {View, StyleSheet} from 'react-native';

import Button from 'react-native-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Login from '../component/login/Login.user';
import * as action from '../component/login/actions';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idAcount: '',
      gmail: '',
      status: false,
    };
  }

  // handlelogin = user => {
  //   const {...account} = user;
  //   console.log(user);
  //   const idAcount = account.uid;
  //   const gmail = account.email;
  //   this.setState({
  //     login: true,
  //     idAcount,
  //     gmail,
  //   });
  // };

  create = status => {
    this.setState({
      status,
    });
  };

  render() {
    const {idAcount, gmail, status} = this.state;
    const {data, isCheck} = this.props.Login;
    console.log('status', this.props);
    return (
      <View style={styles.user}>
        {status === true && this.props.navigation.navigate('Register')}
        {isCheck === false ? (
          // <Login parentLogin={this.handlelogin} createAccount={this.create} />
          <Login {...this.props} createAccount={this.create} />
        ) : (
          <View>
            <View style={styles.locatedBtn}>
              <Button style={[styles.btn, styles.logout]}>LogOut</Button>
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
    // backgroundColor: '#222629',
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

const mapStateToProps = state => {
  return {
    ...state,
  };
};

function mapDispatchToProps(dispatch) {
  const actions = {
    ...action,
  };
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
