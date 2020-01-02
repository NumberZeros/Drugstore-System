import React, {Component} from 'react';
import {View, Keyboard, FlatList} from 'react-native';

import {SearchBar, Card} from 'react-native-elements';

import * as firebase from 'firebase';

import Item from './Item.catergories';

export default class Caterogies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      filterData: '',
    };
    this.ref = firebase.firestore().collection('Product');
  }

  filteData = text => {
    const {value, filterData} = this.state;
    console.log(filterData);
    this.setState({
      filterData: text,
    });
    var that = this;
    this.ref
      .get()
      .then(function(querySnapshot) {
        var temp = [];
        querySnapshot.forEach(function(doc) {
          temp.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        const values = temp.filter(
          item =>
            item.nameproduct
              .toLowerCase()
              .trim()
              .indexOf(
                filterData
                  .toString()
                  .toLowerCase()
                  .trim(),
              ) !== -1,
        );
        that.setState({
          value: values,
        });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  };

  componentWillMount() {
    const {navigation} = this.props;
    const filterData = navigation.getParam('value');
    var that = this;
    this.ref
      .get()
      .then(function(querySnapshot) {
        var temp = [];
        querySnapshot.forEach(function(doc) {
          temp.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        const values = temp.filter(
          item =>
            item.nameproduct
              .toLowerCase()
              .trim()
              .indexOf(
                filterData
                  .toString()
                  .toLowerCase()
                  .trim(),
              ) !== -1,
        );
        that.setState({
          value: values,
        });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  }
  render() {
    const {value, filterData} = this.state;
    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={e => this.setState({filterData: e})}
          returnKeyType="search"
          onChangeText={this.filteData}
          value={filterData}
          onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
        />
        <FlatList
          data={value}
          renderItem={({item}) => (
            <Card>
              <Item data={item} />
            </Card>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}