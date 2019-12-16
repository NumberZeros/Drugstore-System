import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Keyboard} from 'react-native';

import Button from 'react-native-button';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClick: !this.props.data,
      text: '',
      status: true,
    };
  }

  handleData = () => {
    this.props.handleClickParent(this.state.isClick, this.state.text);
  };

  Change = text => {
    this.setState({text});
  };
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.accout}>
          <Text style={[styles.text, styles.hello]}>Hello, </Text>
        </View>

        <Text style={styles.text}>What can I do for you ?</Text>
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
        <View style={styles.search}>
          <Button style={styles.btn}>Prescription</Button>
          <Button style={styles.btn} onPress={this.handleData}>
            Searching
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: '#222629',
    flex: 1,
  },
  input: {
    fontSize: wp('10%'),
    borderWidth: 3,
    opacity: 0.5,
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: '#6B6E70',
    marginHorizontal: wp('5%'),
    marginVertical: wp('3%'),
  },
  text: {
    fontSize: wp('10%'),
    marginHorizontal: wp('5%'),
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
    marginHorizontal: wp('5%'),
    marginVertical: wp('3%'),
  },
  accout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
