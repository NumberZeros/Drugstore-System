import {createStackNavigator} from 'react-navigation-stack';
import Home from './screen/Home';
import Caterogies from './screen/caterogies';
const RootStack = createStackNavigator(
  {
    Home: Home,
    Details: Caterogies,
  },
  {
    initialRouteName: 'Home',
  },
);
export default RootStack;
