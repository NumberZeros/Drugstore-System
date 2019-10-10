import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  render() {
    return (

      <View style={styles.container}>
        <View>
          <View style={styles.btn}>
            <Button  title='Thanh tho' />
          </View>
          <View>
            <Text>Hello ngoc hien</Text>
          </View>
          <View>
            <Text>Hello ngoc hien</Text>
          </View>
          <View>
            <Text>Hello ngoc hien</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center"
  },
  btn:{
    height: 100,
    width: 300,
  }
});
