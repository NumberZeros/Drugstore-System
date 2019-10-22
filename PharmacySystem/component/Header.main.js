import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClick: !this.props.data,
      text: '',
    };
  }

  handleData = () => {
    const isClicked = this.state.isClick;
    Alert.alert(this.state.text);
    this.props.handleClickParent(isClicked);

  };

  Change = text => {
    this.setState({text});
    // Alert.alert(this.state.text);
    // this.props.searchDataParent(this.state.text);
  };

  // enter = e => {
  //   aler
  // };

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Hello, </Text>
        <Button title="Login" color="#86C232" width={10} />
        <Text style={styles.text}>What can I do for you ?</Text>
        <TextInput
          style={styles.input}
          placeholder="Searching..."
          onChangeText={this.Change}
          // onKeyPress={this.enter}
          value={this.state.text}
        />
        <Button title="Prescription" color="#86C232" />
        <Button title="Searching" color="#86C232" onPress={this.handleData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  input: {
    fontSize: 50,
    borderWidth: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: 10,
    borderColor: '#6B6E70',
  },
  text: {
    fontSize: 50,
    color: '#FFFFFF',
  },
});
