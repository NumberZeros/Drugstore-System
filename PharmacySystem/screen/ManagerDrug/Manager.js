import React from 'react';
import {View, StyleSheet, FlatList, Text, ScrollView} from 'react-native';
import Item from './Item.drug';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Overlay} from 'react-native-elements';
// import {Input} from 'react-native-elements';
import Button from 'react-native-button';

import {Card, SearchBar, Input} from 'react-native-elements';

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

  loadData() {
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

  componentDidMount() {
    this.loadData();
    // setInterval(() => {
    //   this.loadData();
    // }, 5000);
  }
  render() {
    const {value} = this.state;
    console.log(this.props.ManagerDrug.action);
    const {
      nameproduct,
      price,
      lo,
      ngayhethan,
      shape,
    } = this.props.ManagerDrug.item;
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
            renderItem={({item, index}) => (
              // <Card>
              <Item data={item} index={item.id} {...this.props} />
              // </Card>
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
    width: wp('45%'),
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
