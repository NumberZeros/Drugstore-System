import React, {Component} from 'react';
import {View} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Header from './Header.home';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClick: false,
      isLoaddata: false,
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
    const {isClick, value, data} = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Header
            handleClickParent={this.callbackHandlerFunction}
            LoginParent={this.login}
            data={isClick}
            // {...this.props}
          />
          {isClick === true &&
            value !== '' &&
            this.props.navigation.navigate('Details', {value: value})}
        </View>
      </View>
    );
  }
}
