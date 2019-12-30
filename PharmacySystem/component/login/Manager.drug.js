import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  Text,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './actions';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from 'react-native-button';

class ManagerDrug extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      email: '',
      namestore: '',
      address: '',
      isStore: false,
    };
  }
  componentDidMount() {
    // const that = this;
    const {id, email, namestore, address, isStore} = this.props.Login.data;
    console.log('props', id, email, namestore);
    this.setState({
      id,
      email,
      namestore,
      address,
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
    //const {username, birthday} = this.props.Login.data;
    //this.state = this.props.Login.data;
    const {namestore, address, isStore} = this.state;
    if (isStore === true) {
      return (
        <View style={styles.content}>
          <TouchableOpacity style={styles.headIcon}>
            <Icon name="user" color="#86C232" size={wp('30%')} />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.text}>Store Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={e => this.setState({namestore: e})}
              returnKeyType="Store Name"
              value={namestore}
              onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
            />
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>address</Text>
            <TextInput
              style={styles.input}
              onChangeText={e => this.setState({address: e})}
              returnKeyType="Drug Name"
              value={address}
              onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
            />
          </View>
          <View style={styles.locatedBtn}>
            <Button
              style={[styles.btn, styles.logout]}
              onPress={() => this.props.actions.updateDrug(this.state)}>
              change
            </Button>
            <Button
              style={[styles.btn, styles.logout]}
              onPress={() => this.props.navigation.goBack()}>
              back
            </Button>
            <Button style={[styles.btn, styles.logout]} onPress={this.test2}>
              test2
            </Button>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.content}>
          <TouchableOpacity style={styles.headIcon}>
            <Icon name="user" color="#86C232" size={wp('30%')} />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.text}>dang ky la nha thuoc</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Store Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={e => this.setState({namestore: e})}
              returnKeyType="Drug Name"
              value={namestore}
              onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
            />
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>address</Text>
            <TextInput
              style={styles.input}
              onChangeText={e => this.setState({address: e})}
              returnKeyType="address"
              value={address}
              onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
            />
          </View>
          <View style={styles.locatedBtn}>
            <Button
              style={[styles.btn, styles.logout]}
              onPress={() => this.props.actions.updateDrug(this.state)}>
              RegisterDrug
            </Button>
            <Button
              style={[styles.btn, styles.logout]}
              onPress={() => this.props.navigation.goBack()}>
              back
            </Button>
            <Button style={[styles.btn, styles.logout]} onPress={this.test2}>
              test2
            </Button>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  title: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: hp('10%'),
    marginBottom: hp('5%'),
  },
  text: {
    fontSize: wp('5%'),
    paddingTop: hp('3%'),
    width: wp('20 %'),
    marginLeft: 5,
  },
  btn: {
    fontSize: 30,
    width: wp('80'),
    backgroundColor: '#86C232',
    borderRadius: 30,
    color: '#FFFFFF',
    padding: wp('5%'),
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginVertical: wp('3%'),
    justifyContent: 'center',
  },
  logout: {
    fontSize: 20,
    width: wp('30%'),
    marginRight: wp('3%'),
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
