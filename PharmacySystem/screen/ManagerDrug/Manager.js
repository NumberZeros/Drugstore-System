import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Button from 'react-native-button';
import Item from '../home/Item.catergories';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: [{name: 'hien'}],
      value: [
        {
          Id: 1,
          ProductName: 'Coffee ',
          Amount: 20,
          Price: '$4.21',
          image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
          Star: 1,
        },
        {
          Id: 2,
          ProductName: 'Ice Cream Bar',
          Amount: 54,
          Price: '$50.42',
          image: 'http://dummyimage.com/100x100.png/dddddd/000000',
          Star: 2,
        },
        {
          Id: 3,
          ProductName: 'Horseradish',
          Amount: 27,
          Price: '$7.56',
          image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
          Star: 3,
        },
        {
          Id: 4,
          ProductName: 'Salmon',
          Amount: 35,
          Price: '$51.40',
          image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
          Star: 4,
        },
        {
          Id: 5,
          ProductName: 'Apple',
          DrugStore: 15,
          Price: '$74.06',
          image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
          Star: 5,
        },
        {
          Id: 6,
          ProductName: 'Paper',
          Amount: 46,
          Price: '$72.88',
          image: 'http://dummyimage.com/100x100.png/dddddd/000000',
          Star: 6,
        },
        {
          Id: 7,
          ProductName: 'Pepper',
          Amount: 39,
          Price: '$64.42',
          image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
          Star: 7,
        },
        {
          Id: 8,
          ProductName: 'Sorrel',
          Amount: 18,
          Price: '$87.07',
          image: 'http://dummyimage.com/100x100.png/dddddd/000000',
          Star: 8,
        },
        {
          Id: 9,
          ProductName: 'Brownies',
          Amount: 25,
          Price: '$69.94',
          image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
          Star: 9,
        },
        {
          Id: 10,
          ProductName: 'Croissants',
          Amount: 46,
          Price: '$33.42',
          image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
          Star: 10,
        },
      ],
    };
  }

  render() {
    const {value} = this.state;

    return (
      <View>
        <View style={styles.locatedBtn}>
          <TextInput
            placeholder="Searching..."
            onChangeText={this.Change}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddDrug')}>
            <Icon name="md-add-circle" color="#86C232" size={wp('18%')} />
          </TouchableOpacity>
        </View>
        <FlatList
          //style={styles.flatList}
          data={value}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={item => item.Id.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  locatedBtn: {
    width: wp('90%'),
    justifyContent: 'center',
    flexDirection: 'row',
    // marginTop: hp('-10%'),
  },
  flatList: {
    alignItems: 'stretch',
  },
  input: {
    fontSize: wp('4%'),
    borderWidth: 3,
    opacity: 0.5,
    // color: '#FFFFFF',
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: '#6B6E70',
    marginHorizontal: wp('3%'),
    marginVertical: wp('3%'),
    width: wp('70%'),
    height: hp('8%'),
  },
});
