import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Keyboard} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class ManagerUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: 'Thọ',
      PhoneNUmber: 25552222,
      BirthDay: '19/05/1999',
    };
  }
  render() {
    return (
      <View style={styles.content}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Searching..."
            onChangeText={this.Change}
            // onKeyPress={this.enter}
            returnKeyType="search"
            value={this.state.text}
            // autoFocus={true}                    //tự động điều hướng vào khung
            onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
          />
          <TextInput
            style={styles.input}
            placeholder="Searching..."
            onChangeText={this.Change}
            // onKeyPress={this.enter}
            returnKeyType="search"
            value={this.state.text}
            // autoFocus={true}                    //tự động điều hướng vào khung
            onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
          />
          <TextInput
            style={styles.input}
            placeholder="Searching..."
            onChangeText={this.Change}
            // onKeyPress={this.enter}
            returnKeyType="search"
            value={this.state.text}
            // autoFocus={true}                    //tự động điều hướng vào khung
            onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
          />
          <TextInput
            style={styles.input}
            placeholder="Searching..."
            onChangeText={this.Change}
            // onKeyPress={this.enter}
            returnKeyType="search"
            value={this.state.text}
            // autoFocus={true}                    //tự động điều hướng vào khung
            onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: wp('10%'),
    borderWidth: 3,
    opacity: 0.5,
    color: '#FFFFFF',
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: '#6B6E70',
    marginHorizontal: wp('5%'),
    marginVertical: wp('3%'),
  },
});
