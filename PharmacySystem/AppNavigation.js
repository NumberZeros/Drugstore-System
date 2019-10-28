import {createStackNavigator} from 'react-navigation-stack';
import Home from './screen/Home';
import Caterogies from './screen/catergories';
const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details: {
      screen: Caterogies,
    },
  },
  {
    initialRouteName: 'Home',
  },
);
export default RootStack;
