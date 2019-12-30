import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Button from 'react-native-button';
import {SearchBar, Card} from 'react-native-elements';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import firebasesApp from '../../component/firebaseConfig';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        {/* <TouchableOpacity style={styles.fill} onPress={this.filteData}>
          <View>
            <Icon name="search" color="#86C232" size={45} />
          </View>
        </TouchableOpacity> */}
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

const styles = StyleSheet.create({
  fillter: {
    flexDirection: 'row',
  },
  input: {
    paddingVertical: 10,
    fontSize: wp('5%'),
    borderWidth: 1,
    opacity: 0.5,
    color: '#474b4f',
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
  },
});
