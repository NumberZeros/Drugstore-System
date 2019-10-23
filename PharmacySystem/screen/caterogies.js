import React, {Component} from 'react';
import {View, TextInput, Alert, StyleSheet, Keyboard} from 'react-native';

import Button from 'react-native-button';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class Caterogies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fillter: '',
    };
  }
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <View style={styles.fillter}>
          <TextInput
            style={styles.input}
            placeholder={navigation.getParam('value')}
            onChangeText={this.Change}
            // onKeyPress={this.enter}
            returnKeyType="search"
            value={this.state.text}
            // autoFocus={true}                    //tự động điều hướng vào khung
            onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
          />
          <Button style={styles.fill}> Fillter</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fillter: {
    flexDirection: 'row',
  },
  input: {
    paddingVertical: 10,
    fontSize: wp('5%'),
    borderWidth: 1,
    opacity: 0.5,
    color: '#FFFFFF',
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: '#6B6E70',
    marginTop: wp('3%'),
    marginLeft: wp('3%'),
    width: wp('80%'),
  },
  fill: {
    width: wp('15%'),
    marginTop: wp('3%'),
    height: wp('15%'),
    margin: wp('1%'),
    borderWidth: 1,
    borderColor: '#86C232',
  },
});
