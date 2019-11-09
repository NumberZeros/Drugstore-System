import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

import Home from './screen/Home';
import Caterogies from './screen/catergories';
import Login from './screen/Login';
import Register from './screen/Register';
import Manager from './screen/Manager';
import Messeger from './screen/Messeger';
import User from './screen/User';

const RootStack = createStackNavigator(
  {
    Home: {screen: Home},
    Details: {screen: Caterogies},
    Login: {screen: Login},
    Register: {screen: Register},
  },
  {
    initialRouteName: 'Home',
  },
);
export default createBottomTabNavigator(
  {
    Home: {screen: RootStack},
    Manager: {screen: Manager},
    Messeger: {screen: Messeger},
    User: {screen: User},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'md-home';
        } else if (routeName === 'Manager') {
          iconName = 'md-apps';
        } else if (routeName === 'Messeger') {
          iconName = 'md-chatboxes';
        } else if (routeName === 'User') {
          iconName = 'md-contact';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'blue',
      labelStyle: {
        fontSize: 15,
      },
      style: {
        backgroundColor: '#474B4F',
      },
    },
  },
);
