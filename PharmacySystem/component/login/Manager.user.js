import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  Text,
  TouchableOpacity,
  addons,
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
import {Input, Image, Avatar} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import firebasesApp from '../firebaseConfig';

class ManagerUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      email: '',
      username: '',
      birthday: '',
      avatar:
        'https://firebasestorage.googleapis.com/v0/b/testfirebase-dbd0c.appspot.com/o/user.png?alt=media&token=3a3b0b23-a790-451a-8315-eb140352af7a',
      path: 'user.png',
    };
  }
  componentDidMount() {
    // const that = this;
    const {id, email, username, birthday, path, avatar} = this.props.Login.data;
    console.log('props', id, email, username);
    this.setState({
      id,
      email,
      username,
      birthday,
      path,
      avatar,
    });
  }
  SelectImage = () => {
    ImagePicker.showImagePicker(
      {noData: true, mediaType: 'photo'},
      response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          this.setState({
            avatar: response.uri,
          });
          this.loadimage(response.uri);
        }
      },
    );
  };
  async loadimage(uri) {
    const path = `user/${this.state.id}/${Date.now()}.jpg`;
    const response = await fetch(uri);
    const blob = await response.blob();
    var imagesRef = firebasesApp
      .storage()
      .ref(path)
      .put(blob);
    this.setState({
      path,
    });
  }
  render() {
    //const {username, birthday} = this.props.Login.data;
    //this.state = this.props.Login.data;
    const {username, birthday} = this.state;
    // console.log(username);
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
        <TouchableOpacity style={styles.headIcon} onPress={this.SelectImage}>
          {/* <Icon
            name="user"
            color="#86C232"
            size={wp('30%')}
          /> */}
          <Avatar
            //source={{uri: this.state.avatarSource}}
            rounded
            //icon={{name: 'user'}}
            //color="#86C232"
            source={{uri: this.state.avatar}}
            size={wp('35%')}
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.text}>User Name:</Text>
          <View style={styles.input}>
            <Input
              onChangeText={e => this.setState({username: e})}
              returnKeyType="User Name"
              value={username}
              onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
            />
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>BrithDay:</Text>
          <View style={styles.input}>
            <Input
              onChangeText={e => this.setState({birthday: e})}
              returnKeyType="BrithDay"
              value={birthday}
              onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
            />
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>Email:</Text>
          <View style={styles.input}>
            <Input
              onChangeText={this.Change}
              returnKeyType="Email"
              value={this.props.Login.data.email}
              // autoFocus={true}          //tự động điều hướng vào khung
              onSubmitEditing={Keyboard.dismiss} //thực hiện submit sẽ tự động đóng keybroad
            />
          </View>
        </View>
        <View style={styles.locatedBtn}>
          <Button
            style={styles.btn}
            onPress={() => this.props.actions.updateInfo(this.state)}>
            Update Info
          </Button>
        </View>
      </View>
    );
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
    // marginRight: wp('20%'),
    // marginLeft: wp('10%'),
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
    marginVertical: wp('3%'),
    justifyContent: 'center',
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
)(ManagerUser);
