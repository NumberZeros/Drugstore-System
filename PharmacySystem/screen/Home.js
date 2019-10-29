import React, {Component} from 'react';
import {View, Button, Alert} from 'react-native';

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
    };
    this.callbackHandlerFunction = this.callbackHandlerFunction.bind(this);
  }

  callbackHandlerFunction = (isClick, text) => {
    this.setState({
      isClick,
      value: text,
    });
  };
  render() {
    const {isClick, value} = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Header
            handleClickParent={this.callbackHandlerFunction}
            data={isClick}
          />
          {isClick === true &&
            value !== '' &&
            this.props.navigation.navigate('Details', {value: value})}
        </View>
      </View>
    );
  }
}
