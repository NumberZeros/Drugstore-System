import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './component/header.main';
import Footer from './component/footer.main';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <Header />
          {/* <View>
            <Text>heolo</Text>
          </View> */}
          <Footer  />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "flex-start",
    marginVertical:30,
    elevation: 2
  },
  Header: {
    marginHorizontal: 10,
  }
});
