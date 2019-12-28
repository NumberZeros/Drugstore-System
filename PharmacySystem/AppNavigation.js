import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screen/home/Home';
import Caterogies from './screen/home/catergories';

import Manager from './screen/ManagerDrug/Manager';
import AddDrug from './screen/ManagerDrug/AddDrug';

import User from './screen/User';
import Login from './component/login/Login.user';
import Register from './screen/Register';
import ManagerUser from './component/login/Manager.user';
import ManagerDrug from './component/login/Manager.drug';

const RootStack = createBottomTabNavigator(
  {
    Manager: {screen: Manager},
    Home: {screen: Home},
    User: {screen: User},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Manager') {
          iconName = 'md-apps';
        } else if (routeName === 'Home') {
          iconName = 'md-home';
        } else if (routeName === 'User') {
          iconName = 'md-contact';
        }
        return <Ionicons name={iconName} size={40} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'light',
      activeBackgroundColor: '#61892F',
      inactiveBackgroundColor: '#474B4F',
      labelStyle: {
        fontSize: 0,
      },
    },
  },
);
export default createStackNavigator(
  {
    Home: {screen: RootStack},
    Details: {screen: Caterogies},
    AddDrug: {screen: AddDrug},
    Login: {screen: Login},
    Register: {screen: Register},
    ManagerUser: {screen: ManagerUser},
    ManagerDrug: {screen: ManagerDrug},
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'Home',
  },
);
