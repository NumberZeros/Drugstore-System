import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screen/Home';
import Caterogies from './screen/catergories';
import Register from './screen/Register';
import Manager from './screen/Manager';
import User from './screen/User';
import ManagerUser from './screen/Manager.user';
import Login from './component/login/Login.user';

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
    Login: {screen: Login},
    Register: {screen: Register},
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'Home',
  },
);
