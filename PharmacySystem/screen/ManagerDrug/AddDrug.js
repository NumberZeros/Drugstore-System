import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Input} from 'react-native-elements';

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
      ngayhethan: '',
      shape: '',
      lo: '',
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
  render() {
    console.log(JSON.stringify(this.state));
    const {nameproduct, price, ngayhethan, shape, lo} = this.state;
    return (
      <ScrollView>
        <View style={styles.content}>
          <View style={{alignSelf: 'flex-start'}}>
            <Button
              style={styles.logout}
              onPress={() =>
                this.props.navigation.navigate('Manager', {isload: true})
              }>
              <Icon
                name="chevron-left"
                color="#4860F8"
                size={30}
                style={{marginRight: wp('3%')}}
              />
            </Button>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Name Product :</Text>
            <View style={styles.input}>
              <Input
                style={styles.input}
                onChangeText={e => this.setState({nameproduct: e})}
                // returnKeyType="User Name"
                value={nameproduct}
              />
            </View>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Price :</Text>
            <View style={styles.input}>
              <Input
                style={styles.input}
                onChangeText={e => this.setState({price: e})}
                // returnKeyType="User Name"
                value={price}
              />
            </View>
            <Text style={styles.money}>VND</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Dead date :</Text>
            <View style={styles.input}>
              <Input
                style={styles.input}
                onChangeText={e => this.setState({ngayhethan: e})}
                // returnKeyType="User Name"
                value={ngayhethan}
              />
            </View>
            <Text style={styles.money}>NMD</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Package :</Text>
            <View style={styles.input}>
              <Input
                style={styles.input}
                onChangeText={e => this.setState({lo: e})}
                // returnKeyType="User Name"
                value={lo}
              />
            </View>
            <Text style={styles.money}>Lô 1</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Shape :</Text>
            <View style={styles.input}>
              <Input
                style={styles.input}
                onChangeText={e => this.setState({shape: e})}
                // returnKeyType="User Name"
                value={shape}
              />
            </View>
          </View>
          <Button
            style={styles.btn}
            onPress={() => {
              this.props.actions.AddDrug(this.state);
              this.setState({
                nameproduct: '',
                price: 0,
                id: '',
                namestore: '',
                ngayhethan: '',
                shape: '',
                lo: '',
              });
            }}>
            Add Product
          </Button>
          {/* <Button style={[styles.btn, styles.logout]} onPress={this.test}>
            test
          </Button>
        </View> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: hp('3%'),
    flex: 1,
    // alignItems: 'center',
    alignItems: 'center',
  },
  input: {
    // paddingTop: hp('-3'),
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
    paddingTop: hp('4%'),
    width: wp('20 %'),
    marginLeft: wp('6%'),
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
  money: {
    // borderWidth: 1,
    marginHorizontal: wp('2%'),
    fontSize: wp('4%'),
    paddingTop: hp('4%'),
    width: wp('10%'),
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
