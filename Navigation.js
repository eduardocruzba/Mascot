import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import App from './screens/App';
import Home from './screens/Home';
import Character from './screens/Character';




const AppNavigator = createStackNavigator({
  App: {
    screen: App
  },
  PantallaPrincipal: {
    screen: Home,
  },
  SegundaPantalla: {
    screen: Character,
  },
}, {
  //initialRouteName: 'PantallaPrincipal',
});

export default createAppContainer(AppNavigator);
