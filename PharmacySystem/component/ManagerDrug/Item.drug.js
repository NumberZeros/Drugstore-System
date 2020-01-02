import React, {Component} from 'react';
import {ActivityIndicator, Alert, ScrollView} from 'react-native';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Image, Input} from 'react-native-elements';
import {Overlay} from 'react-native-elements';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

import Swipeout from 'react-native-swipeout';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Item extends Component {
  render() {
    const {id, nameproduct, namestore, price, image} = this.props.data;
    const swipeSetting = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {},
      left: [
        {
          onPress: () => {
            Alert.alert(
              'Delete item ',
              'Are you sure ?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () =>
                    this.props.actions.deleteData(this.props.index),
                },
              ],
              {cancelable: false},
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      right: [
        {
          onPress: () => {
            this.props.actions.updateData(this.props.data);
          },
          text: 'Update',
          type: 'update',
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };
    const {isEdit, item} = this.props.ManagerDrug;
    return (
      <View>
        <Swipeout {...swipeSetting}>
          <View style={styles.item}>
            <View style={styles.image}>
              <TouchableOpacity>
                {image ? (
                  <Image
                    style={{width: wp('30%'), height: hp('18%')}}
                    source={{uri: `${image}`}}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                ) : (
                  <Image
                    style={{width: wp('30%'), height: hp('18%')}}
                    source={{
                      uri: 'https://dummyimage.com/150x150.jpg/cc0000/ffffff',
                    }}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <View style={[styles.label]}>
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
            </View>
          </View>
        </Swipeout>
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
  },
  image: {
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
  // input: {
  //   width: wp('70%'),
  //   height: hp('8%'),
  // },
  // contentoverlay: {
  //   // marginTop: hp('3%'),
  //   flex: 1,
  //   alignItems: 'center',
  // },
  // title: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   height: hp('10%'),
  //   marginBottom: hp('5%'),
  // },
  // textoverlay: {
  //   fontSize: wp('4%'),
  //   paddingTop: hp('4%'),
  //   width: wp('20 %'),
  //   // marginLeft: wp('6%'),
  // },
  // btn: {
  //   fontSize: 20,
  //   width: wp('60'),
  //   borderWidth: 1,
  //   borderColor: '#86C232',
  //   borderRadius: 30,
  //   color: '#86C232',
  //   padding: wp('5%'),
  //   shadowOpacity: 0.5,
  //   shadowRadius: 3,
  //   // marginVertical: wp('3%'),
  //   // justifyContent: 'center',
  // },
  // logout: {
  //   left: wp('30%'),
  //   fontSize: 20,
  //   width: wp('30%'),
  //   marginRight: wp('50%'),
  // },
  // money: {
  //   // borderWidth: 1,
  //   marginHorizontal: wp('2%'),
  //   fontSize: wp('4%'),
  //   paddingTop: hp('4%'),
  //   width: wp('10%'),
  // },
});
