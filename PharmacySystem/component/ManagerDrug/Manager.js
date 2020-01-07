import React from 'react';
import {View, StyleSheet, FlatList, Text, ScrollView} from 'react-native';
import Item from './Item.drug';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Overlay} from 'react-native-elements';
// import {Input} from 'react-native-elements';
import Button from 'react-native-button';

import {Card, SearchBar, Input} from 'react-native-elements';
import * as firebase from 'firebase';

export default class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
  }

  loadData() {
    const {id} = this.props.Login.data;
    if (id) {
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

  updateData = items => {
    // console.log('item', {...items});
    let db = firebase
      .firestore()
      .collection('Product')
      .doc(items.id)
      .set(
        {
          ...items,
        },
        {merge: true},
      )
      .then(function() {
        console.log('Document successfully written!');
      })
      .catch(function(error) {
        console.error('Error writing document: ', error);
      });
  };

  componentDidMount() {
    this.loadData();
    //khi nao bao cao moi mo ham nay ra
    // setInterval(() => {
    //   this.loadData();
    // }, 10000);
  }
  render() {
    const {value} = this.state;
    const {isEdit, items} = this.props.ManagerDrug;
    console.log('items', items);
    if (this.props.Login.isCheck === true) {
      return (
        <View style={{flex: 1}}>
          <View>
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
            data={value}
            renderItem={({item, index}) => (
              // <Card>
              <Item data={item} index={item.id} {...this.props} />
            )}
            keyExtractor={item => item.id.toString()}
          />
          {isEdit && (
            <Overlay isVisible={isEdit}>
              <ScrollView>
                <View style={styles.contentoverlay}>
                  <View style={{alignSelf: 'flex-start'}}>
                    <Button
                      style={styles.logout}
                      onPress={() => this.props.actions.updateData(items)}>
                      <Icon
                        name="chevron-left"
                        color="#4860F8"
                        size={30}
                        style={{marginRight: wp('3%')}}
                      />
                    </Button>
                  </View>
                  <View style={styles.title}>
                    <Text style={styles.textoverlay}>Name Product :</Text>
                    <View style={styles.inputOverlay}>
                      <Input
                        style={styles.inputOverlay}
                        onChangeText={e =>
                          this.props.actions.handleInputChange({
                            name: 'nameproduct',
                            value: {e},
                          })
                        }
                        value={items.nameproduct}
                      />
                    </View>
                  </View>
                  <View style={styles.title}>
                    <Text style={styles.textoverlay}>Price :</Text>
                    <View style={styles.inputOverlay}>
                      <Input
                        style={styles.inputOverlay}
                        onChangeText={e =>
                          this.props.actions.handleInputChange({
                            name: 'price',
                            value: {e},
                          })
                        }
                        value={items.price}
                      />
                    </View>
                    <Text style={styles.money}>VND</Text>
                  </View>
                  <View style={styles.title}>
                    <Text style={styles.textoverlay}>Dead date :</Text>
                    <View style={styles.inputOverlay}>
                      <Input
                        style={styles.inputOverlay}
                        onChangeText={e =>
                          this.props.actions.handleInputChange({
                            name: 'ngayhethan',
                            value: {e},
                          })
                        }
                        value={items.ngayhethan}
                      />
                    </View>
                    <Text style={styles.money}>NMD</Text>
                  </View>
                  <View style={styles.title}>
                    <Text style={styles.textoverlay}>Package :</Text>
                    <View style={styles.inputOverlay}>
                      <Input
                        style={styles.inputOverlay}
                        onChangeText={e =>
                          this.props.actions.handleInputChange({
                            name: 'lo',
                            value: {e},
                          })
                        }
                        value={items.lo}
                      />
                    </View>
                    <Text style={styles.money}>Lô 1</Text>
                  </View>
                  <View style={styles.title}>
                    <Text style={styles.textoverlay}>Shape :</Text>
                    <View style={styles.inputOverlay}>
                      <Input
                        style={styles.inputOverlay}
                        onChangeText={e =>
                          this.props.actions.handleInputChange({
                            name: 'shape',
                            value: {e},
                          })
                        }
                        value={items.shape}
                      />
                    </View>
                  </View>
                  <Button style={styles.btn} onPress={this.updateData(items)}>
                    Update Product
                  </Button>
                </View>
              </ScrollView>
            </Overlay>
          )}
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
  inputOverlay: {
    width: wp('45%'),
    height: hp('8%'),
  },
  contentoverlay: {
    marginTop: hp('3%'),
    flex: 1,
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: hp('10%'),
    marginBottom: hp('5%'),
  },
  textoverlay: {
    fontSize: wp('4%'),
    paddingTop: hp('4%'),
    width: wp('20 %'),
    // marginLeft: wp('6%'),
  },
  btn: {
    fontSize: 20,
    width: wp('60'),
    borderWidth: 1,
    borderColor: '#86C232',
    borderRadius: 30,
    color: '#86C232',
    padding: wp('5%'),
    shadowOpacity: 0.5,
    shadowRadius: 3,
    // marginVertical: wp('3%'),
    // justifyContent: 'center',
  },
  logout: {
    left: wp('30%'),
    fontSize: 20,
    width: wp('30%'),
    marginRight: wp('50%'),
  },
  money: {
    // borderWidth: 1,
    marginHorizontal: wp('2%'),
    fontSize: wp('4%'),
    paddingTop: hp('4%'),
    width: wp('10%'),
  },
});

// const mapStateToProps = state => {
//   return {
//     ...state,
//   };
// };

// function mapDispatchToProps(dispatch) {
//   const actions = {
//     ...action,
//   };
//   return {actions: bindActionCreators(actions, dispatch)};
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Manager);
