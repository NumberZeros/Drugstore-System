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

export default class ManagerUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      birthday: '',
    };
  }
  // componentDidMount(){
  // }
  render() {
    console.log('props', JSON.stringify(this.props.Login.data));
    const {data} = this.props.Login.data;
    const {username, birthday} = this.state;
    return (
      <View style={styles.content}>
        <TouchableOpacity style={styles.headIcon}>
          <Icon name="user" color="#86C232" size={wp('30%')} />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.text}>User Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => this.setState({username: e, birthday: birthday})}
            returnKeyType="User Name"
            value={username}
            onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>BrithDay</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => this.setState({username: username, birthday: e})}
            returnKeyType="BrithDay"
            value={this.state.text}
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
            value={this.props.Login.data.email}
            // autoFocus={true}                    //tự động điều hướng vào khung
            onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
          />
        </View>
        <View style={styles.locatedBtn}>
          <Button style={[styles.btn, styles.logout]}>Change</Button>
          <Button
            style={[styles.btn, styles.logout]}
            onPress={() => this.props.actions.logout()}>
            LogOut
          </Button>
        </View>
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
// )(ManagerUser);
