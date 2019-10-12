import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import Header from './component/header.main';
import Footer from './component/footer.main';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <Header />
          <View style={styles.Body}>
            <Text>hello</Text>
          </View>
          <Footer  />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222629',
    justifyContent: "flex-start",
    marginTop: 25,
    elevation: 2
  },
  Header: {
    flex:1,
    marginHorizontal: 10,
  },
  Body:{
    flex:1
  },

});
