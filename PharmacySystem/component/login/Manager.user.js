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

class ManagerUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: 'Thọ',
      PhoneNUmber: 25552222,
      BirthDay: '19/05/1999',
    };
  }
  // componentDidMount(){
  // }
  render() {
    console.log("props",JSON.stringify(this.props));
    return (
      <View style={styles.content}>
        <TouchableOpacity style={styles.headIcon}>
          <Icon name="user" color="#86C232" size={wp('30%')} />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.text}>User Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.Change}
            // onKeyPress={this.enter}
            returnKeyType="User Name"
            value={this.state.text}
            // autoFocus={true}                    //tự động điều hướng vào khung
            onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>BrithDay</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.Change}
            // onKeyPress={this.enter}
            returnKeyType="BrithDay"
            value={this.state.text}
            // autoFocus={true}                    //tự động điều hướng vào khung
            onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.Change}
            // onKeyPress={this.enter}
            returnKeyType="Email"
            value={this.state.text}
            // autoFocus={true}                    //tự động điều hướng vào khung
            onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
          />
        </View>
        <Button>Change</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: wp('10%'),
    borderWidth: 3,
    opacity: 0.5,
    color: '#FFFFFF',
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: '#6B6E70',
    marginHorizontal: wp('5%'),
    marginVertical: wp('3%'),
    width: wp('60%'),
    height: hp('8%'),
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: hp('10%'),
    marginBottom: hp('5%'),
  },
  text: {
    paddingTop: hp('3%'),
    width: wp('15 %'),
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
)(ManagerUser);
