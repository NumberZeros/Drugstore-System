import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import Button from 'react-native-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Item extends Component {
  render() {
    const {Id, nameproduct, namestore, price} = this.props.data;
    return (
      <View style={styles.item}>
        <View style={styles.image}>
          <TouchableOpacity>
            {/* <Image
              style={{width: wp('30%'), height: hp('18%')}}
              source={{uri: `${image}`}}
            /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={[styles.label, styles.name]}>
            <Text style={styles.text}>Product Name: </Text>
            <Text style={styles.text}>{nameproduct}</Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.text}>Drug Store: </Text>
            <Text style={styles.text}>{namestore}</Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.text}>price: </Text>
            <Text style={styles.text}>{price}</Text>
          </View>
          {/* <View style={styles.label}>
            <Text style={styles.text}>Star: </Text>
            <Text style={styles.text}>{Star}</Text>
          </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: hp('1%'),
    marginTop: hp('1%'),
    height: hp('20%'),
    marginHorizontal: hp('1%'),
    borderColor: '#6B6E70',
    borderBottomWidth: 1,
  },
  image: {
    borderColor: '#AAAAAA',
    borderWidth: 1,
    width: wp('30%'),
  },
  content: {
    justifyContent: 'space-around',
  },
  label: {
    padding: hp('1%'),
    flexDirection: 'row',
  },
  text: {
    fontSize: hp('2%'),
  },
});
