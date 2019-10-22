import React, {Component} from 'react';
import {View,Button} from 'react-native';

import Header from '../component/Header.main';
export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#86C232',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
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

  callbackHandlerFunction = clickStatus => {
    this.setState({
      isClick: clickStatus,
    });
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Header
            handleClickParent={this.callbackHandlerFunction}
            data={this.state.isClick}
          />
          {this.state.isClick === true &&
            this.props.navigation.navigate('Details')}
        </View>
      </View>
    );
  }
}
