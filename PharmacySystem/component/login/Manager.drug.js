import React, {Component} from 'react';
import {View, StyleSheet, Keyboard, Text, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './actions';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from 'react-native-button';
import {Input} from 'react-native-elements';

class ManagerDrug extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      email: '',
      namestore: '',
      address: '',
      phone: '',
      isStore: false,
    };
  }
  componentDidMount() {
    // const that = this;
    const {
      id,
      email,
      namestore,
      address,
      phone,
      isStore,
    } = this.props.Login.data;
    console.log('props', id, email, namestore, phone);
    this.setState({
      id,
      email,
      namestore,
      address,
      phone,
      isStore,
    });
  }
  test2 = () => {
    console.log(
      'state',
      JSON.stringify(this.state) +
        '\npropDrug: ' +
        JSON.stringify(this.props.Login),
    );
  };
  render() {
    const {namestore, address, phone, isStore} = this.state;
    // cons
    if (isStore === true) {
      return (
        <View style={styles.content}>
          <View style={{alignSelf: 'flex-start'}}>
            <Button
              style={styles.logout}
              onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="chevron-left"
                color="#4860F8"
                size={30}
                style={{marginRight: wp('3%')}}
              />
            </Button>
          </View>
          <Text style={{fontSize: hp('5%')}}> Update Drugstore</Text>
          <View style={styles.title}>
            <Text style={styles.text}>Store Name:</Text>
            <View style={styles.input}>
              <Input
                style={styles.input}
                onChangeText={e => this.setState({namestore: e})}
                value={namestore}
                onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
              />
            </View>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Address:</Text>
            <View style={styles.input}>
              <Input
                style={styles.input}
                onChangeText={e => this.setState({address: e})}
                value={address}
                onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
              />
            </View>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Phone Number:</Text>
            <View style={styles.input}>
              <Input
                style={styles.input}
                onChangeText={e => this.setState({phone: e})}
                value={phone}
                onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
              />
            </View>
          </View>
          <View style={styles.locatedBtn}>
            <Button
              style={styles.btn}
              onPress={() => this.props.actions.updateDrug(this.state)}>
              Update Drug
            </Button>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.content}>
          <View style={{alignSelf: 'flex-start'}}>
            <Button
              style={styles.logout}
              onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="chevron-left"
                color="#4860F8"
                size={30}
                style={{marginRight: wp('3%')}}
              />
            </Button>
          </View>
          <Text style={{fontSize: hp('5%')}}> Register Drugstore</Text>
          <View style={styles.title}>
            <Text style={styles.text}>Store Name:</Text>
            <View style={styles.input}>
              <Input
                style={styles.input}
                onChangeText={e => this.setState({namestore: e})}
                value={namestore}
                onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
              />
            </View>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Address:</Text>
            <View style={styles.input}>
              <Input
                style={styles.input}
                onChangeText={e => this.setState({address: e})}
                value={address}
                onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
              />
            </View>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Phone Number:</Text>
            <View style={styles.input}>
              <Input
                style={styles.input}
                onChangeText={e => this.setState({phone: e})}
                value={phone}
                onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
              />
            </View>
          </View>
          <View style={styles.locatedBtn}>
            <Button
              style={styles.btn}
              onPress={() => this.props.actions.updateDrug(this.state)}>
              Register Drug
            </Button>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: hp('3%'),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    width: wp('70%'),
    height: hp('8%'),
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: hp('10%'),
    marginBottom: hp('5%'),
  },
  text: {
    fontSize: wp('4%'),
    paddingTop: hp('3%'),
    width: wp('20 %'),
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
    left: wp('-30%'),
    fontSize: 20,
    width: wp('30%'),
    marginRight: wp('50%'),
  },
  locatedBtn: {
    width: wp('90%'),
    justifyContent: 'center',
    flexDirection: 'row',
    // marginTop: hp('-10%'),
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
)(ManagerDrug);
