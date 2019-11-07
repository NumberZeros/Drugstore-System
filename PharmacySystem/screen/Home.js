import React, {Component} from 'react';
import {View} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Header from '../component/Header.home';
export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    alignItems: 'center',
    headerStyle: {
      backgroundColor: '#474B4F',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft: wp('45%'),
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      isClick: false,
      value: '',
      login: false,
    };
    this.callbackHandlerFunction = this.callbackHandlerFunction.bind(this);
  }

  callbackHandlerFunction = (isClick, text) => {
    this.setState({
      isClick,
      value: text,
    });
  };

  login = text => {
    this.setState({
      login: text,
    });
  };

  render() {
    const {isClick, value, login} = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Header
            handleClickParent={this.callbackHandlerFunction}
            LoginParent={this.login}
            data={isClick}
          />
          {login === true && this.props.navigation.navigate('Login')}
          {isClick === true &&
            value !== '' &&
            this.props.navigation.navigate('Details', {value: value})}
        </View>
      </View>
    );
  }
}
