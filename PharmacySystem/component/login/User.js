import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import Button from 'react-native-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Login from './Login.user';
import * as action from './actions';
// import Manager from './Manager.user';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idAcount: '',
      gmail: '',
      status: false,
    };
  }

  create = status => {
    this.setState({
      status,
    });
  };

  render() {
    const {idAcount, gmail, status} = this.state;
    const {data, isCheck} = this.props.Login;
    console.log('haha', JSON.stringify(this.props));
    return (
      <View style={styles.user}>
        {status === true && this.props.navigation.navigate('Register')}
        {isCheck === false ? (
          <Login {...this.props} createAccount={this.create} />
        ) : (
          //<Manager {...this.props} />
          <View style={styles.container}>
            <Button
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('ManagerUser')}>
              Manager User
              <Icon
                name="chevron-right"
                color="#4860F8"
                size={30}
                style={{marginRight: wp('3%')}}
              />
            </Button>
            <Button
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('ManagerDrug')}>
              DrugStore Mode
              <Icon
                name="chevron-right"
                color="#4860F8"
                size={30}
                style={{marginRight: wp('3%')}}
              />
            </Button>
            <Button
              style={styles.btn}
              onPress={() => this.props.actions.logout()}>
              LogOut
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

  },
  btn: {
    fontSize: 30,
    color: '#000000',
    // borderBottomWidth: 1,
    padding: wp('5%'),
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginVertical: wp('5%'),
  },
  locatedBtn: {
    width: wp('90%'),
    justifyContent: 'center',
    flexDirection: 'row',
    // marginTop: hp('-10%'),
  },
  logout: {
    fontSize: 20,
    width: wp('27%'),
  },
  container: {
    // flex: 1,
    // marginLeft: wp('10%'),
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
