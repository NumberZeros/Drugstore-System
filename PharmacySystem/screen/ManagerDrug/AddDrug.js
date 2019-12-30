import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './actions';

class AddDrug extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameproduct: '',
      price: 0,
      id: '',
      namestore: '',
    };
  }
  componentDidMount() {
    // const that = this;
    const {id, namestore} = this.props.Login.data;
    this.setState({
      id,
      namestore,
    });
  }
  test = () => {
    console.log(
      'state',
      JSON.stringify(this.state) + '\nprop: ' + JSON.stringify(this.props),
    );
  };
  render() {
    const {drugname, price} = this.state;
    return (
      <View style={styles.content}>
        <TouchableOpacity style={styles.headIcon}>
          <Icon name="image" color="#86C232" size={wp('40%')} />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.text}>Name Product</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => this.setState({nameproduct: e})}
            returnKeyType="User Name"
            value={Text}
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>Price</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => this.setState({price: e})}
            returnKeyType="User Name"
            value={Text}
          />
        </View>
        <Button
          style={[styles.btn, styles.logout]}
          onPress={() => this.props.navigation.goBack()}>
          back
        </Button>
        <Button
          style={[styles.btn, styles.logout]}
          onPress={() => this.props.actions.AddDrug(this.state)}>
          Add
        </Button>
        <Button style={[styles.btn, styles.logout]} onPress={this.test}>
          test
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
)(AddDrug);
