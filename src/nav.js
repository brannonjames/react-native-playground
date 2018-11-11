import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Home from './Home';
import Info from './Info';
import FlexPractice from './FlexPractice';
import AuthScreen from './AuthScreen';

const MainNav = createStackNavigator({
  home: {
    screen: Home,
  },
  info: {
    screen: Info,
  },
  flex: {
    screen: FlexPractice,
  },
});

const Modals = createSwitchNavigator({
  authScreen: {
    screen: AuthScreen,
  },
});

export default createStackNavigator({
  main: {
    screen: MainNav,
  },
  modals: {
    screen: Modals,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
