import {createStackNavigator} from 'react-navigation-stack';
import Home from './screen/Home';
import Caterogies from './screen/catergories';
import Login from './screen/Login';
import Register from './screen/Register';
const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details: {
      screen: Caterogies,
    },
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
  },
  {
    initialRouteName: 'Home',
  },
);
export default RootStack;
