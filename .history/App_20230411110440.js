import { createAppContainer } from "react-navigation";
import { createStackNavigator} from '@react-navigation/stack'
import ResultsShowScreen from "./src/screens/ResultShowScreen";
import SearchScreen from "./src/screens/SearchScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default
<NavigationContainer>
  <Stack.Navigator screenOptions={{headerTitle: 'Business Search'}}>
  <Stack.Screen name="Search" component={SearchScreen} />
  <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
  </Stack.Navigator>
</NavigationContainer>

// const navigator = createStackNavigator({
// Search: SearchScreen, 
// ResultsShow: ResultsShowScreen
// },

// {
//   initialRouteName: 'Search',
//   defaultNavigationOptions: {
//     title: 'Business Search'
//   }
// });

