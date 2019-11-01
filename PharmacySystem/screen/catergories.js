import React, {Component} from 'react';
import {View, TextInput, Alert, Text, StyleSheet, Keyboard} from 'react-native';

import Button from 'react-native-button';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import _ from 'lodash';

export default class Caterogies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: [{name: 'hien'}],
      value: [
        {
          Id: 1,
          ProductName: 'Coffee - Espresso',
          DrugStore: 'Weild',
          Price: '$4.21',
          image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
          Star: 1,
        },
        {
          Id: 2,
          ProductName: 'Ice Cream Bar - Oreo Cone',
          DrugStore: 'Gehrels',
          Price: '$50.42',
          image: 'http://dummyimage.com/100x100.png/dddddd/000000',
          Star: 2,
        },
        {
          Id: 3,
          ProductName: 'Horseradish Root',
          DrugStore: 'Newport',
          Price: '$7.56',
          image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
          Star: 3,
        },
        {
          Id: 4,
          ProductName: 'Salmon - Whole, 4 - 6 Pounds',
          DrugStore: 'Kubacki',
          Price: '$51.40',
          image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
          Star: 4,
        },
        {
          Id: 5,
          ProductName: 'Apple - Custard',
          DrugStore: 'Sailor',
          Price: '$74.06',
          image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
          Star: 5,
        },
        {
          Id: 6,
          ProductName: 'Paper Towel Touchless',
          DrugStore: 'Poulden',
          Price: '$72.88',
          image: 'http://dummyimage.com/100x100.png/dddddd/000000',
          Star: 6,
        },
        {
          Id: 7,
          ProductName: 'Pepper - Chillies, Crushed',
          DrugStore: 'Von Brook',
          Price: '$64.42',
          image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
          Star: 7,
        },
        {
          Id: 8,
          ProductName: 'Sorrel - Fresh',
          DrugStore: 'Asquez',
          Price: '$87.07',
          image: 'http://dummyimage.com/100x100.png/dddddd/000000',
          Star: 8,
        },
        {
          Id: 9,
          ProductName: 'Brownies - Two Bite, Chocolate',
          DrugStore: 'Kellet',
          Price: '$69.94',
          image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
          Star: 9,
        },
        {
          Id: 10,
          ProductName: 'Croissants Thaw And Serve',
          DrugStore: 'McMurtyr',
          Price: '$33.42',
          image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
          Star: 10,
        },
        {
          Id: 11,
          ProductName: 'Oil - Truffle, Black',
          DrugStore: 'Anthona',
          Price: '$16.10',
          image: 'http://dummyimage.com/100x100.png/dddddd/000000',
          Star: 11,
        },
      ],
    };
  }

  list = () => {
    const {value} = this.state;
    const values = value.map((item, index) => <Text>{item}</Text>);
    Alert.alert(values.toString());
  };
  render() {
    const {navigation} = this.props;
    // const Data = value.map(item => (
    //   <View>
    //     <Text>item</Text>
    //   </View>
    // ));
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
          {/* <View>
            <Data />
          </View> */}
          <Button style={styles.fill} onPress={this.list}>
            {' '}
            Fillter
          </Button>
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
