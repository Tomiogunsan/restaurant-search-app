import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import ResultsShowScreen from "./src/screens/ResultShowScreen";
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createStackNavigator();

<NavigationContain

const navigator = createStackNavigator({
Search: SearchScreen, 
ResultsShow: ResultsShowScreen
},

{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);