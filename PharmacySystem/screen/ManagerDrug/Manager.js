import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import Item from '../home/Item.catergories';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from 'react-native-button';

import {Card, SearchBar} from 'react-native-elements';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './actions';
import * as firebase from 'firebase';

class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
  }

  componentWillMount() {
    const {id} = this.props.Login.data;
    if (id !== undefined) {
      let db = firebase.firestore();
      var that = this;
      db.collection('Product')
        .where('idStore', '==', id)
        .get()
        .then(function(querySnapshot) {
          let temp = [];
          querySnapshot.forEach(function(doc) {
            temp.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          that.setState({
            value: temp,
          });
        })
        .catch(function(error) {
          console.log('Error getting documents: ', error);
        });
    }
  }
  render() {
    const {value} = this.state;
    console.log('state', this.state);
    if (this.props.Login.isCheck === true) {
      return (
        <View style={{flex: 1}}>
          <View>
            <View style={{flexGrow: 1}}>
              <SearchBar
                placeholder="Type Here..."
                onChangeText={e => this.setState({filterData: e})}
                returnKeyType="search"
                // onChangeText={this.filteData}
                // value={filterData}
                // onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
              />
            </View>
            <View style={{flexGrow: 0}}>
              <Button
                style={{
                  width: wp('100'),
                  height: hp('7'),
                  backgroundColor: '#86C232',
                  color: '#FFF',
                  alignItems: 'center',
                  paddingTop: hp('2'),
                }}
                onPress={() => this.props.navigation.navigate('AddDrug')}>
                Add Product
              </Button>
            </View>
          </View>
          <FlatList
            //style={styles.flatList}
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
    } else {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Card>
            <Text>
              Vui Lòng đăng nhập để có thể thực hiện chức năng của nhà phát
              triển
            </Text>
            <Button
              style={{
                fontSize: 20,
                width: wp('30%'),
                borderWidth: 1,
                borderColor: '#86C232',
                borderRadius: 30,
                color: '#86C232',
                padding: wp('5%'),
                shadowOpacity: 0.5,
                shadowRadius: 3,
                marginVertical: wp('3%'),
                alignSelf: 'center',
              }}
              onPress={() => this.props.navigation.navigate('User')}>
              Login
            </Button>
          </Card>
        </View>
      );
    }
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

const mapStateToProps = state => {
  return {
    ...state,
  };
};

function mapDispatchToProps(dispatch) {
  const actions = {
    ...action,
  };
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Manager);

// {
//   Id: 1,
//   ProductName: 'Coffee ',
//   Amount: 20,
//   Price: '$4.21',
//   image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
//   Star: 1,
// },
// {
//   Id: 2,
//   ProductName: 'Ice Cream Bar',
//   Amount: 54,
//   Price: '$50.42',
//   image: 'http://dummyimage.com/100x100.png/dddddd/000000',
//   Star: 2,
// },
// {
//   Id: 3,
//   ProductName: 'Horseradish',
//   Amount: 27,
//   Price: '$7.56',
//   image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
//   Star: 3,
// },
// {
//   Id: 4,
//   ProductName: 'Salmon',
//   Amount: 35,
//   Price: '$51.40',
//   image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
//   Star: 4,
// },
// {
//   Id: 5,
//   ProductName: 'Apple',
//   DrugStore: 15,
//   Price: '$74.06',
//   image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
//   Star: 5,
// },
// {
//   Id: 6,
//   ProductName: 'Paper',
//   Amount: 46,
//   Price: '$72.88',
//   image: 'http://dummyimage.com/100x100.png/dddddd/000000',
//   Star: 6,
// },
// {
//   Id: 7,
//   ProductName: 'Pepper',
//   Amount: 39,
//   Price: '$64.42',
//   image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
//   Star: 7,
// },
